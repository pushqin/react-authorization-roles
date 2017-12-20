import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import AuthLink from '../components/AuthLink';
class Header extends React.Component {

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <AuthLink to='/' auth={['admin','user']}><li>Home</li></AuthLink>
                        <AuthLink to='/admin' auth={['admin']}><li>Admin</li></AuthLink>
                        <AuthLink to='/user-details' auth={['admin','user']}><li>User Details</li></AuthLink>
                    </ul>
                </nav>
            </header>
        );
    }
}
Header.propTypes = {};

export default Header;