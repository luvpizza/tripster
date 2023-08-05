import axios, {AxiosRequestConfig} from 'axios';
import {selectUserToken} from '@/store/user/selectors';
import store from '@/store/store';

const axiosInstance = axios.create({
    baseURL: 'http://164.92.175.184/api',
    headers: {
        'Content-Type': 'application/json',
      },
});

axiosInstance
    .interceptors
    .request
    .use((config) => {
        const authToken = selectUserToken(store.getState());
        config.headers['Content-Type'] = `application/json`
        if (authToken) {
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }
        return config;
    });
    export const axiosBaseQuery = async (config: AxiosRequestConfig) => {
        const response = await axiosInstance(config);
        return response.data;
      };