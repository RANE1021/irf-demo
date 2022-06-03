import React from 'react';
import { Container, ListGroup } from "react-bootstrap";
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Coding Demo for Ironhorse</h1>
      <p>The next few pages display the required solutions for the following:</p>
      <Container>
        <ListGroup as="ol">
          <ListGroup.Item>Static information on the landing page.</ListGroup.Item>
          <ListGroup.Item action variant="primary">Simple Counter with incrementing and decrementing buttons.</ListGroup.Item>
          <ListGroup.Item action variant="secondary">Counter that use memory to persist on page reload.</ListGroup.Item>
          <ListGroup.Item action variant="success">Interesting usage of a library.</ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

export default App;
