import React, {PropTypes} from 'react';
import AuthLink from '../components/AuthLink';
import {user,admin} from '../../utils'
class Header extends React.Component {
    render() {

        return (
            <header className='border'>
                HEADER
                <nav>
                    <ul>
                        <AuthLink to='/' allowedRoles={user}><li className='border'>Home</li></AuthLink>
                        <AuthLink to='/admin' allowedRoles={admin}><li className='border'>Admin</li></AuthLink>
                        <AuthLink to='/user-details' allowedRoles={user}><li className='border'>User Details</li></AuthLink>
                        
                    </ul>
                </nav>
                {this.props.children}
            </header>
        );
    }
}
Header.propTypes = {};
export default Header;