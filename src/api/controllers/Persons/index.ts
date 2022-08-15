import { PersonsController } from "./personsControllers";
import { PersonsService } from "../../services/Person/persons.service";

const personsService = new PersonsService()

const personsController = new PersonsController(
    personsService
)

export { personsController, personsService }
