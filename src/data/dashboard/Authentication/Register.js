import {setObjects} from '../../../helpers';

const inputFields = setObjects(['name', 'type'], [
    ['name', 'text'],
    ['username', 'text'],
    ['email', 'email'],
    ['password', 'password'],
    ['password confirmation', 'password'],
]);

export const register = {inputFields};