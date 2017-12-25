import React, {PropTypes} from 'react';
import Auth from './../Auth';
import WithBorder from '../WithBorder';

class AuthButton extends React.Component {
    render() {
        return (
            <WithBorder>
                <button className="big">{this.props.name}</button>
                {this.props.children}
            </WithBorder>
        );
    }
}
AuthButton.propTypes = {};

export default Auth(AuthButton);