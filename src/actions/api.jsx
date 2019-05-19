import axios from 'axios';
import * as apiUrl from '../config';

export const axiosApi = {
    default: {
        client: axios.create({
            baseURL: apiUrl.API_BASE_URL,
            responseType: 'json'
        })
    },
    second: {
        client: axios.create({
            baseURL: apiUrl.API_SECOND_URL,
            responseType: 'json'
        })
    }
};

export const axiosOptions = {
    interceptors: {
        request: [
            (action, config) => {
                if (localStorage.token) {
                    let token = localStorage.token;
                    config.headers['Authorization'] = 'Token ' + token;
                }
                return config;
            }
        ]
    }
};
