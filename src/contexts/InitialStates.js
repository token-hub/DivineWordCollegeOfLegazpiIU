import {getDataFromStorage} from '../helpers/dashboard';
const storageUserKey = 'user';

export const initialStates = {
    isLoading: false,
    isLoggedIn: false,
    user: getDataFromStorage(storageUserKey) || {},
    inputFields: {},
    errors: {},
    storageUserKey
}
