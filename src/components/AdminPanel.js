import React, {PropTypes} from 'react';
import Auth from './Auth';
import AuthLabel from './Controls/AuthLabel';
import {hulk,unique} from '../../utils';
class AdminPanel extends React.Component {
    render() {
        return (
            <div className='border'>
                ADMIN PANEL
                <AuthLabel allowedRoles={this.props.allowedRoles}  name='Admin Outer Label'>
                    <AuthLabel name='Admin Inner Label 1 - No Roles'></AuthLabel>
                    <AuthLabel name='Admin Inner Label 99 - No Roles'></AuthLabel>
                    <AuthLabel allowedRoles={hulk}  name='Only HULK can see'></AuthLabel>
                    <AuthLabel allowedRoles={unique}  name='Lucky user - NOPE config error'></AuthLabel>
                </AuthLabel>
                {this.props.children}
            </div>
        );
    }
}
AdminPanel.propTypes = {};
export default Auth(AdminPanel);