import * as types from './constants.jsx';

export function getData() {
    return {
        type: types.GET_DATA,
        payload: {
            client: 'default',
            request: {
                url: `/people/`,
                method: 'get'
            }
        }
    };
}
