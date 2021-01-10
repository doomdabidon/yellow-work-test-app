import Joi from 'joi';

import { Request, Response, NextFunction } from 'express'

export enum Sources {
    BODY = 'body',
    PARAMS = 'params',
}

export const joiMiddleware = (schema: Joi.Schema, source: Sources) => (req: Request, res: Response, next: NextFunction) => {
    const data = req[source];
    const { error } = schema.validate(data);

    if (error) {
      res.status(422).json({
        message: 'Invalide data',
        data: req.body
      });
    }
    next();
}