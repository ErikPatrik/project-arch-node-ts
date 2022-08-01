import { User } from "../entities/User";
import { UserDto } from "../dtos/User/user.dto";
import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";
import {isEmailValid} from "../utils/validators"
export class UsersService {
    constructor(
        private usersRepository: IUsersRepository,
    ) {}

    async execute(data: UserDto): Promise<any> {
        if (!data.email) throw new Error ('Email is necessary to create a User!')
        if (!data.password) throw new Error ('Password is necessary to create a User!')
        if (data.password !== data.confirmPassword) throw new Error ('The password is not correct!')

        const t = isEmailValid(data.email)
        console.log(t)

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
