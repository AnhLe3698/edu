import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './NavBar';
import Wiki from './Wiki';
import Signin from './Signin';
import Signup from './Signup';
function App() {
  const [message, setMessage] = useState('');
  const data = {
    title: "Title",
    content: [
          {type: 'subtitle', text: 'Subtitle 1'},
          {type: 'paragraph', text: 'Lorem ipsum...'},
          {type: 'image', src: 'image.jpg', alt: 'description'},
          {type: 'subtitle', text: 'Subtitle 2'},
          {type: 'list', items: ['item 1', 'item 2', 'item 3']}
      ]
  };
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
      <Wiki data={data} />
      <Signin />
      <Signup />
    </div>
  );
}

export default App;
