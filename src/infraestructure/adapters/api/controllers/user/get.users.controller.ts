import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from 'uuid'
import { SqlUserRepository } from '../../../../implementations/mysql/mysql.user.repository'
import { UsersGetCase } from "../../../../../application/usecases/user/get.user.usecase";
import { User } from "../../../../../domain/entities/user.entity";

export const getAllUserController = async (_req: Request, res: Response, _next: NextFunction): Promise<User[]> => {
    const sqlRepository = new SqlUserRepository()
    const getCase = new UsersGetCase(sqlRepository)
    let users: User[] = []

    try {
        users = await getCase.run();
        res.json(users)
        return users
    } catch (error) {
        return users
    }
}