import { User } from '../../entities/User'
import { UserDto } from '../../dtos/User/user.dto';

export interface IUsersRepository {
    save(user: UserDto): Promise<User>
    findById(id: string): Promise<User>
    findByEmail(email: string): Promise<User>;
    getAllUsers(): Promise<User>
}
