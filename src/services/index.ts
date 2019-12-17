import axios, { Method } from 'axios';
// import rootStore from 'stores/index'
import { API_URL } from 'config/env';

// import { errorToast } from 'components/Toast'

const baseUrl = API_URL;
export const appConst = {
  apiMockTimeout: 1000 * 10 // 10 seconds
};

const codes = {
  UNAUTHORIZED: 401,
  CUSTOM_TOKEN_EXPIRED: -2,
  REQUEST_TIMEOUT: 408,
  ECONNABORTED: 'ECONNABORTED'
};

axios.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.data?.error?.code === codes.CUSTOM_TOKEN_EXPIRED) {
      console.log('token expired');
      //rootStore.AuthStore.onLogOut()
    }

    if (
      error?.response?.status === codes.REQUEST_TIMEOUT ||
      error.code === codes.ECONNABORTED
    ) {
      //Looks like the server is taking to long to respond, please try again in sometime.
      console.log(`A timeout happend on url ${error.config.url}`);
      //errorToast({ content: 'Server request timed out. Please retry again.' })
    }

    if (!error?.response?.data?.error) {
      console.log('Server error not found');
      //Add something went wrong toast error here
      //statusText in toast maybe.
    }
    return Promise.reject(error);
  }
);

const getFullUrl = (url: string) => {
  return `${baseUrl}${url}`;
};

export type Irequest = {
  subUrl: string;
  method?: Method;
  data?: object;
  params?: object;
  headers?: object;
};

export const get = (request: Irequest) => {
  return commonFetch({ method: 'get', ...request });
};

export const post = (request: Irequest) => {
  return commonFetch({ method: 'post', ...request });
};

export const patch = (request: Irequest) => {
  return commonFetch({ method: 'patch', ...request });
};

export const put = (request: Irequest) => {
  return commonFetch({ method: 'put', ...request });
};

export const deletee = (request: Irequest) => {
  return commonFetch({ method: 'delete', ...request });
};

const commonFetch = (request: Irequest) => {
  const { subUrl, method, data = {}, params, headers = {} } = request;
  const url = getFullUrl(subUrl);
  const commonHeaders = getCommonHeaders();
  return axios({
    method,
    url,
    params,
    data,
    headers: { ...commonHeaders, ...headers }
  });
};

export const content_types = {
  multipart: {
    'Content-Type': 'multipart/form-data'
  },
  json: {
    'Content-Type': 'application/json'
  }
};

const getCommonHeaders = () => {
  /*
  const {
    AuthStore: {
      state: {
        data: { token },
      },
    },
  } = rootStore
  */
  return {
    ...content_types.json
    //Authorization: `JWT ${token}`,
  };
};
