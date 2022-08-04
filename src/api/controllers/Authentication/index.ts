import { AuthenticationController } from "./authenticationController"
import { AuthenticationService } from "../../services/Authentication/authentication.service"
import { UsersRepository } from "../../repositories/implementations/users/users.repository"

const usersRepository = new UsersRepository()

const authenticationService = new AuthenticationService(
    usersRepository
)

const authenticationController = new AuthenticationController(
    authenticationService
)

export { authenticationService, authenticationController }
