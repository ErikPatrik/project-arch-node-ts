import { Router } from 'express';
import { usersController } from '../api/controllers/index';

const usersRouter = Router()

usersRouter.get('/', async (request, response) => {
    return usersController.create(request, response)
})

export { usersRouter }
