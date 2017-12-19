import React, {PropTypes} from 'react';
import {Link } from 'react-router-dom';

class AdminPanel extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/admin'>Admin</Link></li>
                        <li><Link to='/user-details'>User details</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
AdminPanel.propTypes = {};
export default AdminPanel;