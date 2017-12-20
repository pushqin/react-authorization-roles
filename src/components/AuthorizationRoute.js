import React, {PropTypes} from 'react';
import {Redirect} from 'react-router-dom';
import NotAllowed from '../components/NotAllowed';
import {userRole} from '../../utils';


const AuthorizationRoute = (allowedRoles) => (WrappedComponent) => {
    return class WithAuthorization extends React.Component {
        render() {
            // The current user role, probably will arrive from mapStateToProps,redux.
            console.log(userRole);
            if (allowedRoles.includes(userRole)) {
                return <WrappedComponent {...this.props} />
            } else {
                if(this.props.route){
                    return(
                        <Redirect to={'/not-allowed'}/>
                    )
                }
                else{
                    return(
                        null
                    )
                }
            }
        }
    }
};

export default AuthorizationRoute;