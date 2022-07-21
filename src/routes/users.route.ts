import { Router } from 'express';
import { usersController } from '../api/controllers/index';

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
    return usersController.create(request, response)
})

export { usersRouter }
