import { User as UserModel } from "../../drivers/sql/models/user";
import { User } from "../../../domain/entities/user";
import { UserRepository } from "../../../domain/repositories/user-repository";
import { AppDataSource } from '../../drivers/sql/database';


export class SqlUserRepository implements UserRepository {

    async getAll(): Promise<User[]> {
        const repository = AppDataSource.getRepository(UserModel)
        const allUsers = repository.find()
        return allUsers
    }

    async save(user: User): Promise<User> {
        console.log("user", user)
        const repository = AppDataSource.getRepository(UserModel)
        repository.save(user)
        return user
    }

    async getByUsername(username: string): Promise<User | null> {
        const repository = AppDataSource.getRepository(UserModel)
        const user = await repository.findOneBy({ username: username as string });
        /* if (!user) {
            throw new Error("User does not exist");
        }
        */
        return user
    }

    async update(user: User): Promise<User> {
        const repository = AppDataSource.getRepository(UserModel)
        await repository.update(user.id, user);

        return user
    }

    async delete(id: string): Promise<void> {
        const repository = AppDataSource.getRepository(UserModel)
        await repository.delete(id);
    }

    async getById(id: number): Promise<User | null> {
        const repository = AppDataSource.getRepository(UserModel)
        const user = await repository.findOneBy({ id: id as number });

        if (!user) {
            throw new Error("User does not exist");
        }

        return user
    }

    async getByEmail(email: string): Promise<User | null> {
        const repository = AppDataSource.getRepository(UserModel)
        const user = await repository.findOneBy({ email: email as string });

        if (!user) {
            throw new Error("User does not exist");
        }

        return user
    }
}