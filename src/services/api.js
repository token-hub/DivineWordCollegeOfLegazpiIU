// export const apiClient = 'http://api.dwcl-legazpi.edu:8000';

import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api.dwc-legazpi.edu',
    // baseURL: 'http://localhost:8000',
    withCredentials: true,
    headers: {'Accept': 'application/json'}
});

export default Api;
