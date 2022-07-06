import { User } from "../../../domain/entities/user";
import { UserCreateCase } from "../../../application/usecases/create-user";
import { InMemoryUserRepository } from "../../implementations/inMemory/user-repository";
import { UsersGetCase } from "../../../application/usecases/get-users";

(async () => {
    const userInMemoryRepository = new InMemoryUserRepository()
    const userCreateCase = new UserCreateCase(userInMemoryRepository);
    const user: User = {
        name: "Male",
        age: 1,
        username: "maluli",
        id: "1"
    }

    await userCreateCase.run(user)

    const userGetterCase = new UsersGetCase(userInMemoryRepository)
    const users = await userGetterCase.run()
    console.log(users)
})()