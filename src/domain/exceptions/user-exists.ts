export class UserExistsException extends Error {
    constructor() {
        super("User exists")
    }
}