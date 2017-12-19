import React, {PropTypes} from 'react';

const Authorization = (allowedRoles) => (WrappedComponent) => {
    return class WithAuthorization extends React.Component {
        render() {
            // The current user role, probably will arrive from mapStateToProps,redux.
            const role = ['admin'];
            if (allowedRoles.includes(role)) {
                return <WrappedComponent {...this.props} />
            } else {
                return <h1>No page for you!</h1>
            }
        }
    }
};
