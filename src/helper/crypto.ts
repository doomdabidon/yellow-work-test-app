import bcrypt from 'bcrypt';

export const hashPassword = async (value: string) => bcrypt.hash(value, 10);

export const compairePasswords = async (password: string, hash: string) => bcrypt.compare(password, hash);
  