import React, {PropTypes} from 'react';
import {Route,Switch} from 'react-router-dom';
import {auth} from '../helper';
import AdminPanel from './AdminPanel';
import UserDetailsPanel from './UserDetailsPanel';
import HomePage from './HomePage';
import NotAllowed from './NotAllowed';

class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    {auth(['admin','user']) && <Route exact path='/' component={HomePage}/>}
                    {auth(['admin']) && <Route path='/admin' component={AdminPanel}/>}
                    {auth(['admin','user']) && <Route path='/user-details' component={UserDetailsPanel}/>}
                </Switch>
            </main>
        );
    }
}
Main.propTypes = {};

export default Main;