import { Router } from 'express';
import { usersController } from '../controllers/Users/index';

const usersRouter = Router()

usersRouter.post('/auth/register', async (request, response) => {
    return await usersController.create(request, response)
})

usersRouter.get('/', async (request, response) => {
    return await usersController.getUsers(request, response)
})

export { usersRouter }
