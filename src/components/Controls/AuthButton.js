import React, {PropTypes} from 'react';
import  AuthorizationRoute from '../AuthorizationRoute';
import  AuthorizationRouteV1 from '../AuthorizationRouteV1';

class AuthButton extends React.Component {
    render() {
        return (
            <AuthorizationRouteV1 allowedRoles={this.props.allowedRoles}>
                <button className="big">{this.props.name}</button>
            </AuthorizationRouteV1>
        );
    }
}
AuthButton.propTypes = {};

export default AuthButton;