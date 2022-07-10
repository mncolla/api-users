import { Router } from "express"
import { createUserController } from "../controllers/user/create-user";
import { getAllUserController } from "../controllers/user/getall-users";
import { deleteUserController } from "../controllers/user/delete-user";
import { updateUserController } from "../controllers/user/update-user";

const route = Router()

route.delete('/:id', deleteUserController);
route.put('/:id', updateUserController);
route.get('/', getAllUserController);
route.post('/', createUserController);

export default route