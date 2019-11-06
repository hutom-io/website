import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './assets/scss/style.scss';
import Home from './Home';
import logo from './assets/images/logo.png'
import About from './About';

const App = () => {
  return (
    <HashRouter basename="/">
     <header className="header">
        <div className="wrap">
            <Link to="/"><h2><img src={logo} alt="hutom logo"/></h2></Link>
            <ul>
            <Link to="/about"><li className="active">ABOUT</li></Link>
            </ul> 
        </div>
      </header>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}

export default App;