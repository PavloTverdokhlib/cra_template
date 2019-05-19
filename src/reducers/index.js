import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import UserReducer from './reducerUser';
// import {reducer as formReducer} from 'redux-form';

const rootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        user: UserReducer
    });

export default rootReducer;
