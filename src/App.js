import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import './styles.scss';

import Header from './components/Header';
import BubblePage from './components/BubblePage'
import Login from "./components/Login"
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={Login} />

      <PrivateRoute exact path="/bubbles" component={BubblePage}/>
    </div>
    </Router>
  );
}

export default App;
