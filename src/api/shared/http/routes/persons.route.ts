import { Router } from "express";
import { personsController } from "../../../controllers/Persons/index";

const personsRouter = Router()

personsRouter.post('/', async (request, response) => {
    return await personsController.create(request, response)
})

export { personsRouter }
