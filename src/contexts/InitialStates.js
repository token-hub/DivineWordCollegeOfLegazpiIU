import {getDataFromStorage} from '../helpers/dashboard';
const storageUserKey = 'user';

const userInitialState =  getDataFromStorage(storageUserKey) || {};
let inputInitialState = {};

export const initialStates ={
    userInitialState,
    inputInitialState,
    storageUserKey
}