import { UserRepository } from '../../domain/repositories/user-repository'

export class UserDeleteCase {
    private readonly _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    async run(id: string): Promise<void> {
        this._userRepository.delete(id)
    }
}