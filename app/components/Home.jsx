import React, { createClass } from 'react';
import Tasks from 'app/components/tasks';

const Home = createClass({
    displayName: 'Home',
    
    render() {
        const { onClickUser, selectedUser, taskList } = this.props;

        return (
            <div>
                <div className="home__banner">
                    <div className="home__logo-image" />
                    <h1 className="home__banner-heading">CRUD</h1>
                    <div className="home__tagline">This is a Test</div>
                </div>
                <Tasks/>
            </div>
        );
    }
});

export default Home;
