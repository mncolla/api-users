import { Router } from "express"
import {
    deleteUserController,
    updateUserController,
    getAllUserController,
    createUserController
} from "../controllers/user";

const route = Router()

route.delete('/:id', deleteUserController);
route.put('/:id', updateUserController);
route.get('/', getAllUserController);
route.post('/', createUserController);

export default route