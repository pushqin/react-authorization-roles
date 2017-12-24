import React, {PropTypes} from 'react';
import AuthButton from '../components/Controls/AuthButton';
import AuthLabel from '../components/Controls/AuthLabel';
import AuthLabelAndButton from '../components/Controls/AuthLabelAndButton';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AuthButton allowedRoles={['admin']} name="first"/>
                <AuthLabel allowedRoles={['admin']}  name="first"/>
                <br/>
                <AuthLabelAndButton name="Label And Button"/>
                {/*<AuthTextBox name="first"/>*/}
            </React.Fragment>
        );
    }
}

HomePage.propTypes = {};
export default HomePage;

