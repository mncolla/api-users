import { User } from "../../../domain/entities/user";
import { UserCreateCase } from "../../../application/usecases/create-user";
import { UsersGetCase } from "../../../application/usecases/get-users";
import { UserUpdateCase } from "../../../application/usecases/update-user";
import { InMemoryUserRepository } from "../../implementations/inMemory/user-repository";

(async () => {

    // InMemory User Repository
    const userInMemoryRepository = new InMemoryUserRepository()

    // Create case
    const userCreateCase = new UserCreateCase(userInMemoryRepository);
    const user: User = {
        name: "Male",
        age: 1,
        username: "maluli",
        id: "1"
    }
    await userCreateCase.run(user)


    // Update case
    const userUpdateCase = new UserUpdateCase(userInMemoryRepository)
    const newUser: User = {
        name: "Aylen",
        age: 12,
        username: "aylu",
        id: "1"
    }
    await userUpdateCase.run(newUser)


    // Get case
    const userGetterCase = new UsersGetCase(userInMemoryRepository)
    const users = await userGetterCase.run()

    console.log(users)
})()