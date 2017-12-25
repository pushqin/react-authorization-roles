import React, {PropTypes} from 'react';
import {Redirect} from 'react-router-dom';
import NotAllowed from '../components/NotAllowed';
import {userRole} from '../../utils';


const AuthorizationRouteNoAuth = (WrappedComponent) => {
    return class WithAuthorization extends React.Component {
        render() {
            // The current user role, probably will arrive from mapStateToProps,redux.
            console.log(userRole);
            if (this.props.allowedroles.includes(userRole)) {
                return <WrappedComponent {...this.props} />
            } else {
                return null;
            }
        }
    }
};

export default AuthorizationRouteNoAuth;