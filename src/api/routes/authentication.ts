import { Router } from "express";
import { authenticationController } from "../controllers/Authentication";

const authenticationRouter = Router()

authenticationRouter.post('/', async (request, response) => {
    return await authenticationController.handler(request, response)
})

export { authenticationRouter }
