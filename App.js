// App.js
import React from 'react';
import {Route,Switch } from 'react-router-dom';
import AdminPanel from './src/components/AdminPanel';
import UserDetailsPanel from './src/components/UserDetailsPanel';
import HomePage from './src/components/HomePage';
import Header from './src/components/Header';
import NotAllowed from './src/components/NotAllowed';
import AuthorizationComponent from './src/components/AuthorizationRoute';


const creatAuthElement =(auth,element)=>{
    return React.createElement(AuthorizationComponent(auth)(element),{});
};

const Main = () =>(
    <main>
        <Switch>
            <Route exact path='/' component={AuthorizationComponent(['admin'])(HomePage)}/>
            <Route path='/admin' component={AuthorizationComponent(['admin'])(AdminPanel)}/>
            <Route path='/user-details' component={AuthorizationComponent(['user'])(UserDetailsPanel)}/>
            <Route path='/not-allowed' component={NotAllowed}/>
        </Switch>
    </main>
);


// const Header1 = ()=>{
//     const tt2 = renderHeader();
//     return (
//         tt2
//     )
// };
//
// const renderHeader = () => {
//     React.createElement("div",{} ,AuthorizationComponent(['admin'])(Header));
//
// };

//const header =  creatAuthElement(['admin'],Header);

//const main =  React.createElement(AuthorizationComponent(['admin'])(Main),{});

// class Header12 extends React.Component {
//
//     render() {
//         const jopa = AuthorizationComponent(['admin'])(Header);
//         return React.createElement(jopa, {})
//     }
// }
//
//

class App extends React.Component {


    render() {
        return (
            <React.Fragment>
                {creatAuthElement(['admin'],Header)}
                {creatAuthElement(['admin'],Main)}
            </React.Fragment>
        )
    }
}

export default App;
