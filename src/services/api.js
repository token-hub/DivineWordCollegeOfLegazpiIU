// export const apiClient = 'http://api.dwcl-legazpi.edu:8000';

import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://api.dwc-legazpi.edu',
    withCredentials: true,
});

export default apiClient;
