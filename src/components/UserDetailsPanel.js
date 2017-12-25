import React, {PropTypes} from 'react';
import Auth from './Auth';
class UserDetailsPanel extends React.Component {
    render() {
        return (
            <div className="big">
                UserDetailsPanel
            </div>
        );
    }
}
UserDetailsPanel.propTypes = {};
export default Auth(UserDetailsPanel);