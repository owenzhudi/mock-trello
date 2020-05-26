import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Board from '../Board';
import NewCandidate from '../NewCandidate';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/board" component={Board} />
        <Route path="/new-candidate" component={NewCandidate} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
