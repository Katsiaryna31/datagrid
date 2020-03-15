import React from 'react';
import './Table.css';
import Row from './Row';
import TableHeader from './TableHeader';
import SearchArea from './SearchArea';

const Table = ({tableDataList, setTableDataList, conditions, setConditions}) => {
    const tableData = tableDataList.map((dataRow, index) => <Row dataRow={dataRow} key={index} />);
    return <table className="table">
        <TableHeader tableDataList={tableDataList} setTableDataList={setTableDataList} />
        <tbody>
            <SearchArea tableDataList={tableDataList} setTableDataList={setTableDataList} conditions={conditions} setConditions={setConditions}/>
            {tableData}
        </tbody>
    </table>
}

export default Table;