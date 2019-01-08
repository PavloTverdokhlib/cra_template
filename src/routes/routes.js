import React from 'react';
import App from '../containers/App';
import {
    Route,
    Switch
} from 'react-router-dom';
import MainPage from '../containers/MainPage/MainPage';

export default (
    <App>
        <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path='/apple' exact render={() => <p>Hello apple!</p>}/>
        </Switch>
    </App>
)
