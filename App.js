// App.js
import React from 'react';
import {Route,Switch } from 'react-router-dom';
import AdminPanel from './src/components/AdminPanel';
import UserDetailsPanel from './src/components/UserDetailsPanel';
import HomePage from './src/components/HomePage';
import Header from './src/components/Header';
import NotAllowed from './src/components/NotAllowed';
import {auth} from './src/helper';


const Main = () =>(
    <main>
        <Switch>
            {auth(['admin','user']) && <Route exact path='/' component={HomePage}/>}
            {auth(['admin']) && <Route path='/admin' component={AdminPanel}/>}
            {auth(['admin','user']) && <Route path='/user-details' component={UserDetailsPanel}/>}
            <Route path='/not-allowed' component={NotAllowed}/>
        </Switch>
    </main>
);

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
