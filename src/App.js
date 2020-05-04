import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import './styles.scss';
import Header from './components/Header';

import Login from "./components/Login"


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={Login} />
    </div>
    </Router>
  );
}

export default App;
