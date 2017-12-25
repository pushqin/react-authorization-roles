import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {createAuthElement} from './../../utils';
import AuthorizationRouteNoAuth from './AuthorizationRouteNoAuth';


class AuthLink extends React.Component {
    render() {
        return <Link  {...this.props}/>;
    }
}

AuthLink.propTypes = {};

export default AuthorizationRouteNoAuth()(AuthLink);