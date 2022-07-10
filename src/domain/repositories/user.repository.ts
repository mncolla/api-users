import { User } from '../entities/user.entity';

export interface UserRepository {
    save: (user: User) => Promise<User>
    update: (user: User) => Promise<User>
    delete: (id: number) => Promise<void>
    getAll: () => Promise<User[]>
    getById: (id: number) => Promise<User | null>
    getByUsername: (username: string) => Promise<User | null>
    getByEmail: (email: string) => Promise<User | null>
}