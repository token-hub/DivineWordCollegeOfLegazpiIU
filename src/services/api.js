// export const apiClient = 'http://api.dwcl-legazpi.edu:8000';

import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://api.dwc-legazpi.edu',
    // baseURL: 'http://localhost:8000',
    withCredentials: true,
});

export default Api;
