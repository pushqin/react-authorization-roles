import React, {PropTypes} from 'react';
import {Route} from 'react-router-dom';
import AdminPanel from './AdminPanel';
import UserDetailsPanel from './UserDetailsPanel';
import HomePage from './HomePage';
import AuthLabel from './Controls/AuthLabel';
import {user,admin} from '../../utils';

class Main extends React.Component {
    render() {

        return (
            <main className='border'>
                MAIN
                    <Route exact path='/' render={props => (
                        <HomePage allowedRoles={user}>
                            <AuthLabel allowedRoles={user}  name="label composition"/>
                        </HomePage>
                    )}/>
            
                    <Route path='/admin' render={props => (
                        <AdminPanel allowedRoles={admin}/>
                    )}/>
            
                    <Route path='/user-details' render={props => (
                        <UserDetailsPanel allowedRoles={user}/>
                    )}/>
                {this.props.children}
            </main>
        );
    }
}
Main.propTypes = {};
export default Main;