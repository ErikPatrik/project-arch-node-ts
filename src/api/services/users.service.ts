import { User } from "../entities/User";
import { UserDto } from "../dtos/User/user.dto";
import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";

export class UsersService {
    constructor(
        private usersRepository: IUsersRepository,
    ) {}

    async execute(data: UserDto): Promise<any> {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error('User already exists.')
        }

        return await this.usersRepository.save(data)
    }
}
