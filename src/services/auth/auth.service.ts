import { IUser, UserResponce } from '../../interfaces/user';
import { hashPassword, compairePasswords } from '../../helper/crypto';
import { createJWT } from '../../helper/jwt';

let id = 0;

export const users: IUser[] = [
    {
        id,
        email: 'test@gmail.com',
        password: '$2b$10$VQcbSG6LdVWrO8A22zmW7e4IwTXyEPlIsPq3GLWGFNERwxyVoqKLa', // 123456
    }
];

export const login = async (email: string, password: string): Promise<{ user: UserResponce, token: string }> => {
    const user = users.find((user) => user.email === email);
    if (!user) {
        throw 'Incorrect login or password';
    }
    const isPasswordsEqual = await compairePasswords(password, user.password);

    if (!isPasswordsEqual) {
        throw 'Incorrect login or password';
    }

    const token = createJWT(user.id);
    console.log('users', users);

    return { user: { email: user.email, id: user.id }, token };
};

export const register = async (email: string, password: string): Promise<{ user: UserResponce, token: string }> => {
    const user = users.find((user) => user.email === email);
    if (user) {
        throw 'User already exist';
    }

    const encriptedPassword = await hashPassword(password);
    id += 1;
    const newUser: IUser = {
        email, id, password: encriptedPassword
    };

    users.push(newUser);

    const token = createJWT(id);
    console.log('users', users);

    return { user: { email: newUser.email, id: newUser.id }, token };
};