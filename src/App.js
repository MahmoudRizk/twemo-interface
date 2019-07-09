import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { Navbar, Nav, NavItem, Dropdown, Container} from 'react-bootstrap';


import Trends from './components/pages/Trends'
import BrowseHashtag from './components/pages/BrowseHashtag'

import {GoMarkGithub} from "react-icons/go";

export class App extends Component {
  render(){
    return(
      <body>
        <header>
          <Container>
            <Navbar>
              <Navbar.Brand href="/">Twemo</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </header>
        <main>
          <Router>
            <Route exact path="/" component={Trends} />
            <Route exact path="/BH/:handle" component={BrowseHashtag} />
          </Router>
        </main>
        <footer>
          <h4>
            <a className="github-link" href="https://www.github.com"><GoMarkGithub/></a>
          </h4>
        </footer>
      </body>
    );
  }

}

export default App;
