import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export class User {
    public readonly id?: string | ObjectId

    public email?: string;
    public password: string;
    public token?: string;

    constructor(props: Omit<User, 'id'>, id?: string) { // recebe todas as propriedades do User menos o ID
        Object.assign(this, props)

        if (!id) {
            this.id = new mongoose.Types.ObjectId()
        }
    }
}
