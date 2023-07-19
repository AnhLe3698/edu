import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './NavBar';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/test')
      .then(response => {
        setMessage(response.data.message);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <h1>{message}</h1>
    </div>
  );
}

export default App;
