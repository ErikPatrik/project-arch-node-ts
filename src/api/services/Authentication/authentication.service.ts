import { AuthenticationDto } from "../../dtos/Authentication/authentication.dto"
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository"
import * as bcrypt from 'bcrypt'

export class AuthenticationService {
    constructor(
        private usersRepository: IUsersRepository,
    ) {}

    async execute(data: AuthenticationDto): Promise<any> {
        if (!data.email || !data.password) throw new Error ("The address email or password is undefined!")

        const findUserByEmail = await this.usersRepository.findByEmail(data.email)
        if (!findUserByEmail) throw new Error ("The address email not exists!")

        const checkPasswordMatch = await bcrypt.compare(data.password, findUserByEmail.password)
        if (!checkPasswordMatch) throw new Error ("The password is incorrect, try again!")
    }
}
