import React from 'react';
import './Table.css';
import Row from './Row';
import TableHeader from './TableHeader';
import SearchArea from './SearchArea';

const Table = ({ tableDataList, setTableDataList, conditions, setConditions, ageSelectCounter, setAgeSelectCounter, countrySelectCounter, setCountrySelectCounter }) => {
    const tableData = tableDataList.map((dataRow, index) => <Row dataRow={dataRow} key={index} />);
    return <table className="table">
        <TableHeader tableDataList={tableDataList} setTableDataList={setTableDataList} />
        <tbody>
            <SearchArea tableDataList={tableDataList} setTableDataList={setTableDataList} conditions={conditions} setConditions={setConditions} ageSelectCounter={ageSelectCounter} setAgeSelectCounter={setAgeSelectCounter} countrySelectCounter={countrySelectCounter} setCountrySelectCounter={setCountrySelectCounter} />
            {tableData}
        </tbody>
    </table>
}

export default Table;