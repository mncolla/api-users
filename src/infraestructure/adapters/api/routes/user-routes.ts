import { Router } from "express"
import { createUserController } from "../controllers/user/create-user";
const route = Router()

/* route.delete('/:id', deleteUserController);
route.put('/:id', updateUserController);
route.get('/', getAllUserController); */
route.post('/', createUserController);

export default route