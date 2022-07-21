import { uuid } from "uuidv4";

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) { // recebe todas as propriedades do User menos o ID
        Object.assign(this, props)

        if (!id) {
            this.id = uuid()
        }
    }
}
