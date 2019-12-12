import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootswatch/dist/darkly/bootstrap.min.css'
import './App.scss';

import CharacterList from './components/CharacterList/CharacterList';
import Character from './components/Character/Character';

import store from './store.js';

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Navbar className="bg-light" expand="md">
            <Navbar.Brand href="/">Plus Frames</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact component={CharacterList} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <Route path="/character/:name" component={Character} />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default AppRouter;