import * as types from './constants.jsx';

//authentication actions

export function postLogin(data) {
    return {
        type: types.LOGIN,
        payload: {
            client: 'default',
            request: {
                url: `/rest-auth/login/`,
                method: "post",
                data
            }
        }
    };
}