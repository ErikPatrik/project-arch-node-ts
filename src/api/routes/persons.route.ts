import { Router } from "express";
import { PersonsController } from "../controllers/Person/personsControllers";

const personsRouter = Router()

personsRouter.post('/', async (request, response) => {
    console.log('chegou')
})

export { personsRouter }
