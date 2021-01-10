import { Request, Response } from 'express'
import * as authService from '../../services/auth/auth.service';
export const login = async (req: Request, res: Response) => {
    try {
        const { user, token } = await authService.login(req.body.email, req.body.password);

        res.status(200).json({
            user, token
        });
    } catch (e) {
        res.status(422).json({
            error: e
        });
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const { user, token } = await authService.register(req.body.email, req.body.password);

        res.status(200).json({
            user, token
        });
    } catch (e) {
        res.status(422).json({
            error: e
        });
    }
};