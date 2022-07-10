import { UserRepository } from '../../../domain/repositories/user.repository'
import { User } from '../../../domain/entities/user.entity';

export class UserUpdateCase {
    private readonly _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    async run(body: User): Promise<User> {
        this._userRepository.update(body)
        return body;
    }
}