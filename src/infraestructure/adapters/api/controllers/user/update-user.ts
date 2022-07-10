import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from 'uuid'
import { SqlUserRepository } from '../../../../implementations/sql/sql-user-repository'
import { UserUpdateCase } from '../../../../../application/usecases/update-user'
import { User } from "../../../../../domain/entities/user";

export const updateUserController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = req.body

    const sqlRepository = new SqlUserRepository()
    const updateCase = new UserUpdateCase(sqlRepository)

    try {
        const userCreated = await updateCase.run(user);
        res.json(userCreated)
        return
    } catch (error) {
        return next(error)
    }
}