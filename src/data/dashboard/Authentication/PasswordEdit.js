import {setObjects} from '../../../helpers';

const data = setObjects(['name', 'type'], [
    ['current password', 'password'],
    ['new password', 'password'],
    ['new password confirmation', 'password']
]);

export const passwordEdit = {data}