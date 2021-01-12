import * as jwt from 'jsonwebtoken';
import { JWTSecret } from '../constants/config';

export const createJWT = (userId: number) => jwt.sign({ userId: userId }, JWTSecret, { expiresIn: '30d' });
export const decodeJWT = (token: string): any => jwt.verify(token, JWTSecret);