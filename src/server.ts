import { app } from './app'
import dotenv from "dotenv"
import mongoose from 'mongoose'

dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(error => console.log(error))

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

const PORT = process.env.PORT || 2000

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})
