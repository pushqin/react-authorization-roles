import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import AuthorizationRouteV1 from '../AuthorizationRouteV1';
class AuthLabel extends React.Component {
    render() {
        return (
            <AuthorizationRouteV1 allowedRoles={this.props.allowedRoles}>
                <label className="big">{this.props.name}</label>
            </AuthorizationRouteV1>
        );
    }
}
AuthLabel.propTypes = {};
export default AuthLabel;