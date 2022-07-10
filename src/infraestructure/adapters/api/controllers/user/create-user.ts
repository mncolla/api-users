import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from 'uuid'
import { SqlUserRepository } from '../../../../implementations/sql/sql-user-repository'
import { UserCreateCase } from "../../../../../application/usecases/create-user";
import { User } from "../../../../../domain/entities/user";

export const createUserController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {
        name,
        username,
        email,
        password
    } = req.body

    const sqlRepository = new SqlUserRepository()
    const createCase = new UserCreateCase(sqlRepository)

    const newUser: User = {
        name,
        username,
        email,
        password
    }

    try {
        const userCreated = await createCase.run(newUser);
        res.json(userCreated)
        return
    } catch (error) {
        return next(error)
    }
}