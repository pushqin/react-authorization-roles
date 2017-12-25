import React, {PropTypes} from 'react';
import Auth from './Auth';
import AuthLabel from './Controls/AuthLabel'
import {god} from '../../utils'

class UserDetailsPanel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='border'> USER DETAILS PANEL
                    <div className="big">
                        <AuthLabel allowedRoles={god} name="O my God!!"/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

UserDetailsPanel.propTypes = {};
export default Auth(UserDetailsPanel);