import express, { Request, Response, NextFunction } from 'express'
import { usersRouter } from './routes/users.route'
import { personsRouter } from './routes/persons.route'
import { authenticationRouter } from './routes/authentication'
import cors from 'cors'
import AppError from '../errors/AppError'

const app = express()

app.use(cors())
app.use(express.json())

// create middleware to get AppError
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    })
})

app.get('/', (req, res) => {
    return res.json({
        message: 'Ok'
    })
})

app.use('/users', usersRouter)
app.use('/users/authentication', authenticationRouter)
app.use('/persons', personsRouter)

export { app }
