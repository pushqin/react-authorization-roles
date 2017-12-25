import React, {PropTypes} from 'react';
import Auth from './Auth';
import AuthButton from '../components/Controls/AuthButton';
import AuthLabel from '../components/Controls/AuthLabel';
import {admin,user} from '../../utils'
class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='border'>Home
                    <AuthButton allowedRoles={admin} name="Button admin"/>
                    <AuthButton allowedRoles={user} name="Button user"/>
                    <AuthLabel allowedRoles={user} name="label In component"/>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

HomePage.propTypes = {};
export default Auth(HomePage);

