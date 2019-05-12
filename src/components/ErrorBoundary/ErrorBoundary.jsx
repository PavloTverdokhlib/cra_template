import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        console.log('did catch');
        this.setState({ hasError: true });
    }

    render(){
        const { children } = this.props;
        const { hasError } = this.state;
        console.log(hasError);
        if(hasError) {
            return <div>Something goes wrong...</div>
        }
        return children;
    }
}