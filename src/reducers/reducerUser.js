// import * as types from "../actions/constants";

const INITIAL_STATE = {
    login_data: [],
    error: []
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        // case types.LOGIN_SUCCESS :
        //     return {...state, get_pools : action.payload.data};
        // case types.LOGIN_FAIL :
        //     return {...state, error : action.error.response.data};
        default:
            return state;
    }
}
