// App.js
import styles from './src/style.css'
import React from 'react';
import Header from './src/components/Header';
import Main from './src/components/Main'

class App extends React.Component {
    render() {
        return (
            <div className='border'>
                APP
               <Header/>
               <Main/>
            </div>
        )
    }
}
export default App;
