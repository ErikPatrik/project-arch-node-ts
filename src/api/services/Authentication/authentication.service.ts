import { AuthenticationDto } from "../../dtos/Authentication/authentication.dto"
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository"
import * as bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export class AuthenticationService {
    constructor(
        private usersRepository: IUsersRepository,
    ) {}

    async execute(data: AuthenticationDto): Promise<any> {
        if (!data.email || !data.password) throw new Error ("The address email or password is undefined!")

        const user = await this.usersRepository.findByEmail(data.email)
        if (!user) throw new Error ("The address email not exists!")

        if (user && (await bcrypt.compare(data.password, user.password))) {
            const token = jwt.sign(
                { user_id: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: "2h" }
            )

            user.token = token
            return token
        }

        throw new Error ("The password is incorrect, try again!")
    }
}
