// App.js
import styles from './src/style.css'

import React from 'react';
import {Route,Switch } from 'react-router-dom';
import AdminPanel from './src/components/AdminPanel';
import UserDetailsPanel from './src/components/UserDetailsPanel';
import HomePage from './src/components/HomePage';
import Header from './src/components/Header';
import NotAllowed from './src/components/NotAllowed';
import AuthorizationComponent from './src/components/AuthorizationRoute';
import AuthorizationComponentV1 from './src/components/AuthorizationRouteV1';

import {createAuthElement} from './utils';


const Main = () =>(
    <main>
        <Switch>
            <Route exact path='/'  render={props => (
                <AuthorizationComponentV1 allowedRoles={['admin','user']}>
                    <HomePage/>
                </AuthorizationComponentV1>
            )}/>
            {/*<Route exact path='/' component={AuthorizationComponent(['admin','user'])(HomePage)} route={true}/>*/}
            <Route path='/admin'  render={props => (
                <AuthorizationComponentV1 allowedRoles={['admin']} route={true}>
                    <AdminPanel/>
                </AuthorizationComponentV1>
            )}/>

            {/*<Route path='/admin' component={AuthorizationComponent(['admin'])(AdminPanel)} route={true}/>*/}
            <Route path='/user-details' component={AuthorizationComponent(['admin','user'])(UserDetailsPanel)} route={true}/>
            <Route path='/not-allowed' component={NotAllowed}/>
        </Switch>
    </main>
);

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                {createAuthElement(['admin','user'],Header)}
                {createAuthElement(['admin','user'],Main)}
            </React.Fragment>
        )
    }
}

export default App;
