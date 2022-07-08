import { UserExistsException } from '../../../../domain/exceptions/user-exists';
import { NextFunction, Request, Router, Response } from 'express';
import userRoutes from './user-routes';

const route = Router()

route.use('/users', userRoutes);

route.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    if (err instanceof UserExistsException) {
        res.status(400).json({
            message: 'User already exists'
        });
    } else {
        next(err);
    }
})

route.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.log(err);
    res.status(500)
    res.json({
        message: 'Error ocurred!',
        error: err
    })
})

export default route