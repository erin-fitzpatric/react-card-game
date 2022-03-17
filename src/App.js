import React from 'react';
import './App.css';
import CardGameBoard from './CardGameBoard';
import { Layout, Header } from './Layout.components';

const App = () => (
  <div className="App">
    <Header>Guess if the next card will be higher or lower!</Header>
    <Layout>
      <CardGameBoard />
    </Layout>
  </div>
)

export default App;