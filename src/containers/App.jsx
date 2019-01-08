import React from 'react';
import '../style/main.scss';

const App = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default App;
