import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import { getData } from "../../actions/userActions";

class Container extends Component {

    componentDidMount() {
        // const { getData } = this.props;
        // getData().then(res => {
        //     console.log('res', res);
        // }).catch((err) => {
        //     console.log('error', err);
        // });
    }

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

const mapDispatchToProps = {
    getData
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);