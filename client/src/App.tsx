import axios from 'axios';
import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';

function App() {

  return (
    <div className="App" data-testid="app-root">
        <Profile />
    </div>
  )
}

export default App;
