import { IUsersRepository } from "../../interfaces/IUsersRepository";
import { User } from '../../../entities/User'
import { UserDto } from "../../../dtos/User/user.dto";
import { UserSchema } from "../../../models/schemas/users.schema";
export class UsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<any> {

        const getUser = UserSchema.findOne({
            email: email
        })

        if (!getUser) {
            throw new Error
        }

        return getUser
    }

    async save(user: UserDto): Promise<User> {
        const userSave = new UserSchema({
            email: user.email,
            password: user.password
        })

        return userSave.save()
    }
}
