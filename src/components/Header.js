import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import Auth from '../components/Auth';
class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <Auth roles={['admin', 'user']}><li><Link to='/'>Home</Link></li></Auth>
                        <Auth roles={['admin']}><li><Link to='/admin'>Admin</Link></li></Auth>
                        <Auth roles={['admin', 'user']}><li><Link to='/user-details'>User Details</Link></li></Auth>
                    </ul>
                </nav>
            </header>
        );
    }
}
Header.propTypes = {};
export default Header;