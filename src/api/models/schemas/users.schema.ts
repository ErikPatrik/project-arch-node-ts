import mongoose from "mongoose";
import * as bcrypt from 'bcrypt';
import { IUser } from "../interfaces/IUser";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }
})

const User = mongoose.model('User', userSchema)

export { User }
