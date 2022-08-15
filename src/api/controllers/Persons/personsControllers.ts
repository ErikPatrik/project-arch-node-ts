import { Request, Response } from "express";
import { PersonsDto } from "../../dtos/Persons/persons.dto";
import { PersonsService } from "../../services/Person/persons.service";

export class PersonsController {
    constructor(
        private personsService: PersonsService
    ) {}

    async create(request: Request, response: Response): Promise<Response> {
        const data: PersonsDto = request.body

        try {
            const createPersons = await this.personsService.execute(data)

            return response.status(200).send({
                createPersons
            })
        } catch (error) {
            console.log(error)
        }
    }
}
