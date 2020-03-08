import React from 'react';
import './Table.css';
import data from '../../Config';

let value = '';

const Row = ({ dataRow }) => {
    return <tr>
        <td>{dataRow.firstName}</td>
        <td>{dataRow.surname}</td>
        <td>{dataRow.ageCategory}</td>
        <td>{dataRow.originCountry}</td>
        <td>{dataRow.visitedCountry}</td>
        {(dataRow.positiveCoronavirus === true) && <td>+</td>}
        {(dataRow.positiveCoronavirus === false) && <td>-</td>}
        <td>{dataRow.contactsPeople}</td>
    </tr>
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age category</th>
                <th>Origin country</th>
                <th>Visited country</th>
                <th>Is positive test</th>
                <th>Number of contacts</th>
            </tr>
        </thead>
    )
}

const startSearch = (e, value, tableDataList, setTableDataList) => {
    let newData = [];
    console.log(tableDataList);
    tableDataList.forEach((person) => {
        if (person[e.target.id].includes(value) || person[e.target.id].toUpperCase().includes(value) || person[e.target.id].toLowerCase().includes(value)) {
            newData.push(person);
        }
    })
    setTableDataList(newData);
}

const SearchArea = ({tableDataList, setTableDataList}) => {
    return (
        <tr className="search-area" onInput={(e) => {
            console.log(value);
            console.log(e.target.value);
            if (value.length > e.target.value.length) {
                setTableDataList(data);
                console.log('delete');
                value = e.target.value;
                console.log(value);
            }
            value = e.target.value;
            startSearch(e, value, tableDataList, setTableDataList)
        }
        }>
            <td className="search-td"><input type="text" className="search-textarea" id="firstName"></input></td>
            <td className="search-td"><input type="text" className="search-textarea" id="surname"></input></td>
            <td className="search-td"><input type="text" className="search-textarea" id="ageCategory"></input></td>
            <td className="search-td"><input type="text" className="search-textarea" id="originCountry"></input></td>
            <td className="search-td"><input type="text" className="search-textarea" id="visitedCountry"></input></td>
            <td className="search-td"><input type="text" className="search-textarea" id="positiveCoronavirus"></input></td>
            <td className="search-td"><input type="text" className="search-textarea" id="contactsPeople"></input></td>
        </tr>
    )
}

const Table = ({ tableDataList, setTableDataList }) => {
    const tableData = tableDataList.map((dataRow, index) => <Row dataRow={dataRow} key={index} />);
    return <table className="table">
        <TableHeader />
        <tbody>
            <SearchArea tableDataList={tableDataList} setTableDataList={setTableDataList} />
            {tableData}
        </tbody>
    </table>
}

export default Table;