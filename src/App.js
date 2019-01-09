import React, { Component } from 'react';
import {
  BrowserRouter as Router, // router is used for navigating between components (pages)
  Route,
} from 'react-router-dom';
import ScrollUpButton from "react-scroll-up-button"; // scroll up button from the React framework lets the user go back to the top of the page with one click

// components
import Header from './components/headerComponent/header'; // importing smaller components (header and footer)
import Footer from './components/footerComponent/footer';
import Creations from './components/pages/creations'; // importing three pages
import Contact from './components/pages/contact';
import About from './components/pages/about';

// includes
import './Assets/css/styles.css'; // css styles for the app
import './Assets/css/normalize.css';

// Header and footer are always displayed. The routes point to individual pages. "Creations" is shown on load by default.

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"> 

          <Header />

          <ScrollUpButton />

          <Route exact path='/' component={Creations} />
          <Route exact path='/Creations' component={Creations} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;