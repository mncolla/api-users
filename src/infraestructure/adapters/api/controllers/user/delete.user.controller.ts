import { NextFunction, Request, Response } from "express";
import { SqlUserRepository } from '../../../../implementations/mysql/mysql.user.repository'
import { UserDeleteCase } from "../../../../../application/usecases/user/delete.user.usecase";
import { User } from "../../../../../domain/entities/user.entity";

export const deleteUserController = async (req: Request, res: Response, _next: NextFunction): Promise<User> => {
    const sqlRepository = new SqlUserRepository()
    const deleteCase = new UserDeleteCase(sqlRepository)
    const user: User = req.body
    const { id } = user;

    try {
        await deleteCase.run(id);
        res.json(user)
        return user
    } catch (error) {
        return user
    }
}