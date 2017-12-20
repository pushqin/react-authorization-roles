import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {createAuthElement} from './../../utils';
class AuthLink extends React.Component {
    render() {
        return createAuthElement(this.props.allowedRoles, Link, this.props);
    }
}
AuthLink.propTypes = {};
export default AuthLink;