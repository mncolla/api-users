import { UserRepository } from '../../../domain/repositories/user.repository'
import { User } from '../../../domain/entities/user.entity';
import { UserExistsByUsername } from '../../../domain/services/username.exists.service';
import { UserExistsException } from '../../../domain/exceptions/user.exists.exception';

export class UserCreateCase {
    private readonly _userRepository: UserRepository;
    private readonly _userExistsByUsername: UserExistsByUsername;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;

        // servicio de dominio
        this._userExistsByUsername = new UserExistsByUsername(userRepository);
    }

    async run(body: User): Promise<User> {
        const userExists: boolean = await this._userExistsByUsername.run(body.username)

        if (userExists) throw new UserExistsException()

        const userCreated: User = await this._userRepository.save(body)

        return userCreated;
    }
}