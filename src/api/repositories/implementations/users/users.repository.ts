import { IUsersRepository } from "../../interfaces/IUsersRepository";
import { User } from '../../../entities/User'
import { UserDto } from "../../../dtos/User/user.dto";
import { UserSchema } from "../../../models/schemas/Users/users.schema";
import * as bcrypt from 'bcrypt'
export class UsersRepository implements IUsersRepository {
    async save(user: UserDto): Promise<User> {
        const cryptoPass = await bcrypt.hash(user.password, 10)

        const userSave = new UserSchema({
            email: user.email,
            password: cryptoPass
        })

        return userSave.save()
    }

    async findById(id: string): Promise<any> {
        return await UserSchema.findById(id, '-password')
    }

    async findByEmail(email: string): Promise<any> {
        return await UserSchema.findOne({
            email
        })
    }

    async getAllUsers(): Promise<any> {
        return UserSchema.find()
    }
}
