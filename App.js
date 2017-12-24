// App.js
import React from 'react';
import Header from './src/components/Header';
import Main from './src/components/Main';
import {auth} from './src/helper';



class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                {auth(['admin','user']) && <Header/>}
                {auth(['admin','user']) && <Main/>}
            </React.Fragment>
        )
    }
}

export default App;
