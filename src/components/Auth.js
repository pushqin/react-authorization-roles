import React, {PropTypes} from 'react';
import  {role} from '../config';
class Auth extends React.Component {

    render() {
        return (
            <React.Fragment>
                {this.props.roles.includes(role) ? this.props.children : null}
            </React.Fragment>
        )
    }
}
Auth.propTypes = {};
export default Auth;