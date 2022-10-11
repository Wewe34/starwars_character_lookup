import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Profile from './Components/Profile';
import {Button} from 'react-bootstrap';

function App() {

  return (
    <div className="App">
        <Profile />
    </div>
  )
}

export default App;
