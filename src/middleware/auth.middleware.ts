import { Request, Response, NextFunction } from 'express'
import { decodeJWT } from '../helper/jwt';

const extractToken = (req: Request) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        throw 'No Authorization Header';
    }

    try {
        const token = authorization?.split("Bearer ")[1];
        return token;
    } catch {
        throw 'Invalid Token Format';
    }
};

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = extractToken(req);
        const decodedToken: { userId: string } = decodeJWT(token as string);
        const userId = decodedToken.userId;
        if (userId === undefined) {
          throw 'Invalid user ID';
        } else {
          res.locals.userId = userId;
          next();
        }
      } catch (e) {
        res.status(401).json({
          error: e
        });
      }
}