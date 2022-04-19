import axios, { AxiosRequestConfig } from 'axios';

const makeRequest = async ({
  url,
  method = 'GET',
  data = {},
  params = {}
}: AxiosRequestConfig) => {
  try {
    const respons = await axios({
      method,
      url,
      data,
      params,
      baseURL: 'https://jsonplaceholder.typicode.com/users',
      timeout: 10000
    });
    return respons.data;
  } catch (e) {
    return undefined;
  }
};
export default makeRequest;
