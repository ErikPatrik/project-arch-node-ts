import { Request, Response } from "express"
import { AuthenticationService } from "../../services/Authentication/authentication.service"
import { AuthenticationDto } from "../../dtos/Authentication/authentication.dto"

export class AuthenticationController {
    constructor(
        private authenticationService = new AuthenticationService()
    ){}

    async handler(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body

        try {
            const authUser:AuthenticationDto = await this.authenticationService.execute({
                email,
                password
            })

            return response.status(201).send({
                message: 'Login ok!',
                token: authUser
            })
        } catch (err) {
            return response.status(409).send({ message: err.message || "Unexpected error."})
        }
    }
}

Continuar: https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
