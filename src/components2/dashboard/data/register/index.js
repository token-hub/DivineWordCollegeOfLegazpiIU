import { setObjectGen } from '../../../../helpers';

const register = [
    setObjectGen('Username', 'text'),
    setObjectGen('Email', 'email'),
    setObjectGen('Password', 'password'),
    setObjectGen('Confirm Password', 'password'),
]

export { register }