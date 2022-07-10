import { UserRepository } from '../../../domain/repositories/user.repository'
import { User } from '../../../domain/entities/user.entity';


export class UsersGetCase {
    private readonly _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository
    }

    async run(): Promise<User[]> {
        const users: User[] = await this._userRepository.getAll();
        return users;
    }
}