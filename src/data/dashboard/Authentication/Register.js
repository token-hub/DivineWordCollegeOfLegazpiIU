import {setObjectGen} from '../../../helpers';

const inputFields = [
    setObjectGen('Username', 'text'),
    setObjectGen('Email', 'email'),
    setObjectGen('Password', 'password'),
    setObjectGen('Confirm Password', 'password'),
]

export const register = {inputFields};