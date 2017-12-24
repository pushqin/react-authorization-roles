import React, {PropTypes} from 'react';
import  {role} from '../config';
class Auth extends React.Component {

    render() {
        return (
            <React.Fragment>
                {this.props.children }
            </React.Fragment>
        )
    }
}
Auth.propTypes = {};
export default Auth;