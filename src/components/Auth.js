import React, {PropTypes} from 'react';
import {userRole} from '../../utils';

const Auth = (WrappedComponent) => {
    
    return class extends React.Component {
        
        render() {
            // The current user role, probably will arrive from mapStateToProps,redux.
            if (this.props.allowedRoles.includes(userRole)) {
                return <WrappedComponent  {...this.props} />
            } else {
                return null;
            }
        }
    }
};

export default Auth;