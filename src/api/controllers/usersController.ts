import { Request, Response } from "express";
import { UserDto } from "../dtos/User/user.dto";
import { UsersService } from "../services/users.service";

export class UsersController {
    constructor(
        private usersService: UsersService
    ){}

    async create(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body

        try {
            const user:UserDto = await this.usersService.execute({
                email,
                password
            })

            delete user.password

            return response.status(201).send({
                message: 'User created!',
                data: {user}
            })
        } catch (err) {
            return response.status(400).send({ message: err.message || "Unexpected error." })
        }
    }
}
