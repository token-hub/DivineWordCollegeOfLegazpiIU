import { setObjectGen } from '../../helpers';

export const register = [
    setObjectGen('Username', 'text'),
    setObjectGen('Email', 'email'),
    setObjectGen('Password', 'password'),
    setObjectGen('Confirm Password', 'password'),
]