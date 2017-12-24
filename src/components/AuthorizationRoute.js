import React, {PropTypes} from 'react';
import {Redirect} from 'react-router-dom';
import NotAllowed from '../components/NotAllowed';

const AuthorizationRoute = (allowedRoles) => (WrappedComponent) => {
    return class WithAuthorization extends React.PureComponent {
        render() {
            // The current user role, probably will arrive from mapStateToProps,redux.
            const role = 'admin';
            if (allowedRoles.includes(role)) {
                return <WrappedComponent {...this.props} />
            } else {
                return(
                    <Redirect to={'/not-allowed'}/>
                )
            }
        }
    }
};



export default AuthorizationRoute;