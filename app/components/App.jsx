import React, { createClass } from 'react';
import { Link } from 'react-router';

const App = createClass({
    displayName: 'App',

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

export default App;
