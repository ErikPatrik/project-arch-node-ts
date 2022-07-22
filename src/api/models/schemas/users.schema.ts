import mongoose from "mongoose";
import * as bcrypt from 'bcrypt';
import { IUser } from "../interfaces/IUser";

const UsersSchema = new mongoose.Schema({
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

export { UsersSchema }

const build = (attr: IUser) => {
    return new User(attr)
}

export { User }
