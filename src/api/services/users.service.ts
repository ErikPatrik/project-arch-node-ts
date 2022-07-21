import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";
import { UserDto } from "../dtos/User/user.dto";

export class UsersService {
    constructor(
        private usersRepository: IUsersRepository,
    ) {}

    async execute(data: UserDto) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error('User already exists.')
        }

        const user = new User(data)

        await this.usersRepository.save(user)
        return user
    }
}
