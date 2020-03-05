import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Table from './Components/Table/Table';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Table/>
      </main>
    </div>
  );
}

export default App;
