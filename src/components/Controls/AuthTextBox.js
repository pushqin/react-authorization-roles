import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
class AuthTextBox extends React.Component {
    render() {
        return (
            <input type="text" className="big">{this.props.name}</input>
        );
    }
}
AuthTextBox.propTypes = {};
export default AuthTextBox;