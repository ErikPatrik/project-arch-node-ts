import { Request, Response } from "express";
import { UsersService } from "../services/users.service";

export class UsersController {
    constructor(
        private usersService: UsersService
    ){}

    async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body

        try {
            const user = await this.usersService.execute({
                name,
                email,
                password
            })

            delete user.password

            return response.status(201).send({
                message: 'User created!',
                data: {user}
            })
        } catch (err) {
            return response.status(400).json({ message: err || "Unexpected error." })
        }
    }
}
