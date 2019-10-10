import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './assets/scss/style.scss';
import Home from './Home';
import logo from './assets/images/logo.png'
import Solution from './Solution';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <HashRouter basename="/">
     <header className="header">
        <div className="wrap">
            <Link to="/"><h2><img src={logo} alt="hutom logo"/></h2></Link>
            <ul>
            <Link to="/solution"><li className="active">SOLUTION</li></Link>
            <Link to="/about"><li className="active">ABOUT</li></Link>
            <Link to="/contact"><li className="active">CONTACT</li></Link>
            </ul> 
        </div>
      </header>
      <Route path="/" exact component={Home} />
      <Route path="/solution" component={Solution} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </HashRouter>
  )
}

export default App;