import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import Auth from '../components/Auth';
class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Auth roles={['admin', 'user']}><Link to='/'>Home</Link></Auth></li>
                        <li><Auth roles={['admin']}><Link to='/admin'>Admin</Link></Auth></li>
                        <li><Auth roles={['admin', 'user']}><Link to='/user-details'>User Details</Link></Auth></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
Header.propTypes = {};
export default Header;