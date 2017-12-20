import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
class NotAllowed extends React.Component {
    render() {
        return (
            <div className="big">NOT ALLOWED</div>
        );
    }
}
NotAllowed.propTypes = {};
export default NotAllowed;