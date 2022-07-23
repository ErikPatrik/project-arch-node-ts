import { Router } from 'express';
import { usersController } from '../controllers/index';

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
    return usersController.create(request, response)
})

usersRouter.get('/', async (request, response) => {
    return usersController.getUsers(request, response)
})

export { usersRouter }
