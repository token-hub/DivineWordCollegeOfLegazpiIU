const storageUserKey = 'user';

export const initialStates = {
    isLoading: false,
    isLoggedIn: false,
    users: {
        all: {},
        selected: {},
        authenticated: {}
    },
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
    updates: {
        all: {},
        selected: {}
    },
    slides: {
        all:{},
        selected: []
    },
    storageUserKey
}
