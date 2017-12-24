// App.js
import React from 'react';
import Header from './src/components/Header';
import Main from './src/components/Main';
import Auth from './src/components/Auth';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Auth roles={['admin', 'user']}><Header/></Auth>
                <Auth roles={['admin', 'user']}><Main/></Auth>
            </React.Fragment>
        )
    }
}
export default App;
