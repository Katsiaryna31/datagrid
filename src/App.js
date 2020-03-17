import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Table from './Components/Table/Table';
import data from './Config';

const App = () => {
  let [tableDataList, setTableDataList] = useState(data);
  let [conditions, setConditions] = useState('All');
  return (
    <div className="App">
      <Header />
      <main>
        <input type="text" placeholder="Search" className="mainSearch" onInput={(e) => {
          const newData = [];
          const value = e.target.value.toString();
          tableDataList.forEach((person) => {
            for (let property in  person) {
              if (typeof person[property] === 'string' && (person[property].includes(value) || person[property].toLowerCase().includes(value) || person[property].toUpperCase().includes(value)) && !newData.includes(person)) {
                newData.push(person);
              }
            }
          })
          setTableDataList(newData);
        }
        }></input>
        <Table tableDataList={tableDataList} setTableDataList={setTableDataList} conditions={conditions} setConditions={setConditions}/>
      </main>
    </div>
  );
}

export default App;
