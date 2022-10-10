import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Profile from './Components/Profile';

function App() {

  return (
    <div className="App">
        <p>Star Wars Character Lookup</p>
        <Profile />
    </div>
  )
}

export default App;
