import express, { Router } from 'express'
import { usersRouter } from './routes/users.route'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json({
        message: 'Ok'
    })
})

app.use('/users', usersRouter)

export { app }
