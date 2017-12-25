import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import Auth from './Auth';

class AuthLink extends React.Component {
    
    render() {
        return <Link {...this.props}>
            {this.props.children}
        </Link>;
    }
}

AuthLink.propTypes = {};

export default Auth(AuthLink);