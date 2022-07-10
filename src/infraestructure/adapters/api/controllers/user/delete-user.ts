import { NextFunction, Request, Response } from "express";
import { SqlUserRepository } from '../../../../implementations/sql/sql-user-repository'
import { UserDeleteCase } from "../../../../../application/usecases/delete-user";
import { User } from "../../../../../domain/entities/user";

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