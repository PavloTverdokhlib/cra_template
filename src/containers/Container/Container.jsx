import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Container extends Component {

    render(){
        if(!localStorage.token) return <Redirect to="/auth" />;
        return (
            <div>
                MainPage
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        // postLogin
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);