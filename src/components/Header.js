import React, {PropTypes} from 'react';
import {Link,Route} from 'react-router-dom';
import AuthLink from '../components/AuthLink';
import AuthorizationRouteV1 from '../components/AuthorizationRouteV1';
class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <AuthLink to='/' allowedroles={['admin', 'user']}><li>Home</li></AuthLink>
                        <AuthLink to='/admin' allowedroles={['admin']}><li>Admin</li></AuthLink>
                        <AuthLink to='/user-details' allowedroles={['admin', 'user']}><li>User Details</li></AuthLink>

                        <br/>

                        <AuthorizationRouteV1 allowedRoles={['admin', 'user']}>
                            <Link to='/' ><li>Home</li></Link>
                        </AuthorizationRouteV1>
                        <AuthorizationRouteV1 allowedRoles={['admin', 'user']}>
                            <Link to='/admin' ><li>Admin</li></Link>
                        </AuthorizationRouteV1>
                        <AuthorizationRouteV1 allowedRoles={['admin', 'user']}>
                            <Link to='/user-details' ><li>User Details</li></Link>
                        </AuthorizationRouteV1>

                    </ul>
                </nav>
            </header>
        );
    }
}
Header.propTypes = {};
export default Header;