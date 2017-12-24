import React, {PropTypes} from 'react';
import  AuthorizationRoute from '../AuthorizationRoute';
import  AuthorizationRouteV1 from '../AuthorizationRouteV1';
import AuthLabel from '../Controls/AuthLabel';
import AuthButton from '../Controls/AuthButton';

class AuthLabelAndButton extends React.Component {
    render() {
        return (
            <AuthorizationRouteV1 allowedRoles={this.props.allowedRoles}>
                <AuthLabel allowedRoles={this.props.allowedRoles} name="Label of button"/>
                <AuthButton allowedRoles={this.props.allowedRoles} name="Button of label"/>
            </AuthorizationRouteV1>
        );
    }
}
AuthLabelAndButton.propTypes = {};

export default AuthLabelAndButton;