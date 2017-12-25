import React, {PropTypes} from 'react';
import Auth from './../Auth';
import WithBorder from './../WithBorder';

class AuthLabel extends React.Component {
    render() {
        // use classname package here
        
        const injectAuthPropToChildren = React.Children.map(this.props.children, child =>
            React.cloneElement(child, { allowedRoles: child.props.allowedRoles || this.props.allowedRoles }));
        
        return (
            <WithBorder>
                <label className={`${this.props.className || ''} inline-block big`}>{this.props.name}</label>
                {injectAuthPropToChildren}
            </WithBorder>
        );
    }
}
AuthLabel.propTypes = {};
export default Auth(AuthLabel);