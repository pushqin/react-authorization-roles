import React, {PropTypes} from 'react';

class WithBorder extends React.Component {
    
    render() {
        return (
            <div className='border'>
                {this.props.children}
            </div>
        )
    }
}

WithBorder.propTypes = {};

export default WithBorder;