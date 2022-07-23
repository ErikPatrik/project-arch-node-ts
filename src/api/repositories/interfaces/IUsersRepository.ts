import { User } from '../../entities/User'
import { UserDto } from '../../dtos/User/user.dto';

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    save(user: UserDto): Promise<User>
    getAllUsers(): Promise<User>
}
