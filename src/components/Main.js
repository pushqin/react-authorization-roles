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
                <Switch>
                    <Auth><Route exact path='/' component={HomePage}/> </Auth>
                    <Auth><Route path='/admin' component={AdminPanel}/></Auth>
                    <Auth><Route path='/user-details' component={UserDetailsPanel}/></Auth>
                </Switch>
            </main>
        );
    }
}
Main.propTypes = {};

export default Main;