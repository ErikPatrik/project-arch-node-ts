import { Request, Response } from "express";

export class UsersController {
    async create(request: Request, response: Response): Promise<string> {
        console.log('oi')
        return 'tchau'
    }
}
