import { User } from "../entities/User";
import { UserDto } from "../dtos/User/user.dto";
import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";

export class UsersService {
    constructor(
        private usersRepository: IUsersRepository,
    ) {}

    async execute(data: UserDto): Promise<any> {
        const emailAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if (emailAlreadyExists) throw new Error('Email already exists!')

        return await this.usersRepository.save(data)
    }

    async getAllUsers(): Promise<User> {
        const findALlUsers = await this.usersRepository.getAllUsers()

        if (!findALlUsers) throw new Error('Users not exists!')

        return findALlUsers
    }
}
