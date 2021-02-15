import {getDataFromStorage} from '../helpers/dashboard';
const storageUserKey = 'user';

export const initialStates = {
    isLoading: false,
    isLoggedIn: false,
    user: getDataFromStorage(storageUserKey) || {},
    inputFields: {},
    errors: {},
    logs: {
        all: {},
        selected: {}
    },
    permissions: {},
    roles: {
        all: {},
        selected: {}
    },
    storageUserKey
}
