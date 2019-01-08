import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// import {postLogin} from "../../actions/userActions";

class MainPage extends Component {

    componentDidMount() {
        // this.props.postLogin();
    }

    render(){
        // const {user:{error}} = this.props;
        return (
            <div>
                MainPage<br/>
                <Link to="/apple">Go to apples</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        // user: state.user
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // postLogin
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);