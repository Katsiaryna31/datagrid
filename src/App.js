import React, { useState }  from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Table from './Components/Table/Table';
import data from './Config';

const App = () => {
  let [tableDataList, setTableDataList] = useState(data);
  return (
    <div className="App">
      <Header/>
      <main>
        <Table tableDataList={tableDataList} setTableDataList={setTableDataList}/>
      </main>
    </div>
  );
}

export default App;
