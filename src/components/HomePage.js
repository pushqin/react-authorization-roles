import React, {PropTypes} from 'react';
import Auth from './Auth';
import AuthButton from '../components/Controls/AuthButton';
import AuthLabel from '../components/Controls/AuthLabel';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <AuthButton allowedRoles={['admin']} name="Button admin"/>
                    <AuthButton allowedRoles={['admin', 'user']} name="Button user"/>
                    <AuthLabel allowedRoles={['admin', 'user']} name="label In component"/>
                    {this.props.children}
            </React.Fragment>
        );
    }
}

HomePage.propTypes = {};
export default Auth(HomePage);

