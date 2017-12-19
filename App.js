// App.js
import React from 'react';
import { BrowserRouter,Route,Link } from 'react-router-dom';
import AdminPanel from './src/components/AdminPanel';
import UserDetailsPanel from './src/components/UserDetailsPanel';
import HomePage from './src/components/HomePage';

const Header = () => (
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

const Main = () =>(
    <main>
        <Switch>
            <Route path='/' component={HomePage}/>
            <Route path='/admin' component={AdminPanel}/>
            <Route path='/user-details' component={UserDetailsPanel}/>
        </Switch>
    </main>
);


class App extends React.Component {
    render() {
        return (
            [
                <Header/>,
                <Main/>
            ]
        );
    }
}
