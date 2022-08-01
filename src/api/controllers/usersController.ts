import { Request, Response } from "express";
import { UserDto } from "../dtos/User/user.dto";
import { UsersService } from "../services/users.service";

export class UsersController {
    constructor(
        private usersService: UsersService
    ){}

    async create(request: Request, response: Response): Promise<Response> {
        const { email, password, confirmPassword } = request.body

        try {
            const user:UserDto = await this.usersService.execute({
                email,
                password,
                confirmPassword
            })

            return response.status(201).send({
                message: 'User created!',
                data: {user}
            })
        } catch (err) {
            console.log(err)
            return response.status(409).send({ message: err.message || "Unexpected error." })
        }
    }

    async getUsers(request: Request, response: Response): Promise<any> {
        try {

            const getAllUsers = await this.usersService.getAllUsers()

            return response.status(200).send({
                data: getAllUsers
            })
        } catch (err) {
            console.log(err)
        }
    }
}
