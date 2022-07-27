import { UsersService } from '../../src/api/services/users.service'
import { UsersRepository } from '../../src/api/repositories/implementations/users/users.repository'
import { User } from '../../src/api/entities/User'
import { UserDto } from '../../src/api/dtos/User/user.dto'

describe('Create User', () => {
    it('Should be able to create a user', async () => {
        const usersRepository = new UsersRepository()
        const usersService = new UsersService(usersRepository)

        const userData: UserDto = {
            email: "erik@hotmail.com",
            password: "123"
        }

        const user = await usersService.execute(userData)

        console.log('a', user)

        //expect(user).toHaveProperty("id")
    })
})
