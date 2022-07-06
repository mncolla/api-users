import { User } from '../entities/user';

export interface UserRepository {
    getAll: () => Promise<User[]>
    getByUsername: (username: string) => Promise<User | null>
    save: (user: User) => Promise<User>
    update: (user: User) => Promise<User>
    delete: (id: string) => Promise<void>
    getById: (id: string) => Promise<User | null>
}