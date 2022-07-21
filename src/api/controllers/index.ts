import { UsersController } from "./usersController"
import { UsersService } from "../services/users.service"
import { UsersRepository } from "../repositories/implementations/users/users.repository"

const usersRepository = new UsersRepository()

const usersService = new UsersService(
    usersRepository
)

const usersController = new UsersController(usersService)

export { usersService, usersController }
