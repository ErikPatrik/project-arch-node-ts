import { app } from './app'
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 2000

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})
