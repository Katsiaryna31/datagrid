import React, { useState }  from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Table from './Components/Table/Table';
import data from './Config';

const App = () => {
  let [tableDataList, setTableDataList] = useState(data);
  let [conditions, setConditions] = useState('All');
  return (
    <div className="App">
      <Header/>
      <main>
        <Table tableDataList={tableDataList} setTableDataList={setTableDataList} conditions={conditions} setConditions={setConditions}/>
      </main>
    </div>
  );
}

export default App;
