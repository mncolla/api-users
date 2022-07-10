import { User } from '../entities/user';

export interface UserRepository {
    save: (user: User) => Promise<User>
    update: (user: User) => Promise<User>
    delete: (id: string) => Promise<void>
    getAll: () => Promise<User[]>
    getById: (id: number) => Promise<User | null>
    getByUsername: (username: string) => Promise<User | null>
    getByEmail: (email: string) => Promise<User | null>
}