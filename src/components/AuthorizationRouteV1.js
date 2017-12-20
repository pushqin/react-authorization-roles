import React, {PropTypes} from 'react';
import {Redirect} from 'react-router-dom';
import {userRole} from '../../utils';
class AuthorizationComponentV1 extends React.Component {
    render() {
        // The current user role, probably will arrive from mapStateToProps,redux.
        console.log(userRole);
        if (this.props.allowedRoles.includes(userRole)) {
            return this.props.children
        } else {
            if (this.props.route) {
                return (
                    <Redirect to={'/not-allowed'}/>
                )
            }
            else {
                return (
                    null
                )
            }
        }
    }
}

export default AuthorizationComponentV1;