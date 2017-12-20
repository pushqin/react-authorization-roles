import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import AuthorizationRoute from './AuthorizationRoute';

class Header extends React.Component {

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/admin'>Admin</Link></li>
                        <li><Link to='/user-details'>User Details</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
Header.propTypes = {};

export default Header;