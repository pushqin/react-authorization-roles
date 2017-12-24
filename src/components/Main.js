import React, {PropTypes} from 'react';
import {Route,Switch} from 'react-router-dom';
import Auth from '../components/Auth';
import AdminPanel from './AdminPanel';
import UserDetailsPanel from './UserDetailsPanel';
import HomePage from './HomePage';

class Main extends React.Component {


    render() {
        return (
            <main>
                <Auth roles={['admin', 'user']}><Route exact path='/' component={HomePage}/> </Auth>
                <Auth roles={['admin']}><Route path='/admin' component={AdminPanel}/></Auth>
                <Auth roles={['admin', 'user']}><Route path='/user-details' component={UserDetailsPanel}/></Auth>
            </main>
        );
    }
}
Main.propTypes = {};

export default Main;