import React from 'react';
import { Redirect } from 'react-router-dom';

const AuthContainer = props => {
    if (!!localStorage.token) return <Redirect to="/admin" />;
    return (
        <div>
            <h2>Authentication</h2>
        </div>
    );
};

export default AuthContainer;
