import { setObjectGen } from '../../helpers';

const login = [
    setObjectGen('Username', 'text'),
    setObjectGen('Password', 'password'),
]

export { login }