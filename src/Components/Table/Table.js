import React from 'react';
import './Table.css';
import data from '../../Config';

function Row(props) {
    const data = props.dataRow;
    return <tr>
        <td>{data.firstName}</td>
        <td>{data.surname}</td>
        <td>{data.ageCategory}</td>
        <td>{data.originCountry}</td>
        <td>{data.visitedCountry}</td>
        {(data.positiveCoronavirus === true) && <td>+</td>}
        {(data.positiveCoronavirus === false) && <td>-</td>}
        <td>{data.contactsPeople}</td>
    </tr>
}

function TableHeader() {
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

function Table() {
    const tableData = data.map((dataRow, index) => <Row dataRow={dataRow} key={index}/>);
    return <table className="table">
        <TableHeader />
        <tbody>
            {tableData}
        </tbody>
    </table>
}

export default Table;