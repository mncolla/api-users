/* import { User } from "../../../domain/entities/user.entity";
import { UserRepository } from "../../../domain/repositories/user.repository";

export class InMemoryUserRepository implements UserRepository {

    private userData: User[] = []

    async getAll(): Promise<User[]> {
        return this.userData;
    };

    async save(user: User): Promise<User> {
        this.userData.push(user)
        return user
    }

    async getByUsername(username: string): Promise<User | null> {

        const user = this.userData.find(x => x.username === username)

        if (user === undefined) return null

        return user
    }

    async update(user: User): Promise<User> {
        this.userData = this.userData.map((u) => u.id === user.id ? user : u);
        return user
    }

    async delete(id: string): Promise<void> {
        this.userData = this.userData.filter(u => id !== u.id)
    }

    async getById(_id: string): Promise<User | null> {
        return null
    }

} */