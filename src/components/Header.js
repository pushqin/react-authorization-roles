import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import AuthorizationRoute from './AuthorizationRoute';
import {auth} from '../helper';
class Header extends React.PureComponent {

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        {auth(['admin','user']) && <li><Link to='/'>Home</Link></li>}
                        {auth(['admin']) && <li><Link to='/admin'>Admin</Link></li>}
                        {auth(['admin','user']) && <li><Link to='/user-details'>User Details</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}
Header.propTypes = {};

export default Header;