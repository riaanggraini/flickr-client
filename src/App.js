import React from 'react';
import {  Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import './App.css';
import imagePages from './pages/image'

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Container>
        <Route exact path="/" component={imagePages}/>
        </Container>
      
      </header>
    </div>
  );
}

export default App;
