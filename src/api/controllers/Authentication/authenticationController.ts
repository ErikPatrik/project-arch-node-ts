import { Request, Response } from "express"
import { AuthenticationService } from "../../services/Authentication/authentication.service"
import { AuthenticationDto } from "../../dtos/Authentication/authentication.dto"

export class AuthenticationController {
    constructor(
        private authenticationService = new AuthenticationService
    ) {}
    async handler(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body

        console.log(email, password)

        try {
            const authUser:AuthenticationDto = await this.authenticationService.execute({
                email,
                password
            })

            return response.status(201).send({
                message: 'Login ok!',
                data: {authUser}
            })
        } catch (err) {
            return response.status(409).send({ message: err.message || "Unexpected error."})
        }
    }
}
