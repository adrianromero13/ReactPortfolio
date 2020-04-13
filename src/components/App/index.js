import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from '../About';
import Contact from '../../containers/Contact';
import Portfolio from '../../containers/Portfolio';
import Navbar from './../NavBar';
import Footer from '../Footer';

const App = props => (
  <Router>
    <Navbar />
    <Route exact path="/" component={About}/>
    <Route exact path="/Contact" component={Contact}/>
    
    <Footer />
  </Router>
);


export default App;