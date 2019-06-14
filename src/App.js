import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './pages/Register'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
