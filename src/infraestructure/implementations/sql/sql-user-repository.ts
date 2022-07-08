import { UserModel } from "../../drivers/sql/models/user";
import { User } from "../../../domain/entities/user";
import { UserRepository } from "../../../domain/repositories/user-repository";
import { Database } from '../../drivers/sql/database';


export class SqlUserRepository implements UserRepository {

    database = Database.getInstance()

    async getAll(): Promise<User[]> {
        const repository = (await this.database).getRepository(UserModel)
        const allUsers = repository.find()

        return allUsers
    }

    async save(user: User): Promise<User> {
        const repository = (await this.database).getRepository(UserModel)
        repository.save(user)
        return user
    }

    async getByUsername(username: string): Promise<User | null> {
        const repository = (await this.database).getRepository(UserModel)
        const user = await repository.findOneBy({ username: username as string });

        /* if (!user) {
            throw new Error("User does not exist");
        }
 */
        return user
    }

    async update(user: User): Promise<User> {
        const repository = (await this.database).getRepository(UserModel)
        await repository.update(user.id, user);

        return user
    }

    async delete(id: string): Promise<void> {
        const repository = (await this.database).getRepository(UserModel)
        await repository.delete(id);
    }

    async getById(id: string): Promise<User | null> {
        const repository = (await this.database).getRepository(UserModel)
        const user = await repository.findOneBy({ id: id as string });

        if (!user) {
            throw new Error("User does not exist");
        }

        return user
    }
}