import { IUsersRepository } from "../../interfaces/IUsersRepository";
import { User } from '../../../entities/User'
import { UserDto } from "../../../dtos/User/user.dto";
import { UserSchema } from "../../../models/schemas/users.schema";
export class UsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<any> {
        return await UserSchema.findOne({
            email: email
        })
    }

    async save(user: UserDto): Promise<User> {
        const userSave = new UserSchema({
            email: user.email,
            password: user.password
        })

        return userSave.save()
    }

    async getAllUsers(): Promise<any> {
        return UserSchema.find()
    }
}
