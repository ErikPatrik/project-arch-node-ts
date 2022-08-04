import express, { Router } from 'express'
import { usersRouter } from './api/routes/users.route'
import { personsRouter } from './api/routes/persons.route'
import { authenticationRouter } from './api/routes/authentication'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json({
        message: 'Ok'
    })
})

app.use('/users', usersRouter)
app.use('/users/authentication', authenticationRouter)
app.use('/persons', personsRouter)

export { app }
