import React from 'react';
import sortData from './Sort';

const TableHeader = ({ tableDataList, setTableDataList }) => {
    return (
        <thead>
            <tr>
                <th className="cell">
                    <div>Name</div>
                    <div className="buttons">
                        <button className="button-top" id="firstName-top" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'top'))}></button>
                        <button className="button-bottom" id="firstName-bottom" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'bottom'))}></button>
                    </div>
                </th>
                <th className="cell">
                    <div>Surname</div>
                    <div className="buttons">
                        <button className="button-top" id="surname-top" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'top'))}></button>
                        <button className="button-bottom" id="surname-bottom" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'bottom'))}></button>
                    </div>
                </th>
                <th className="cell">
                    <div>Age category</div>
                    <div className="buttons">
                        <button className="button-top" id="ageCategory-top" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'top'))}></button>
                        <button className="button-bottom" id="ageCategory-bottom" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'bottom'))}></button>
                    </div>
                </th>
                <th className="cell">
                    <div>Origin country</div>
                    <div className="buttons">
                        <button className="button-top" id="originCountry-top" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'top'))}></button>
                        <button className="button-bottom" id="originCountry-bottom" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'bottom'))}></button>
                    </div>
                </th>
                <th className="cell">
                    <div>Visited country</div>
                    <div className="buttons">
                        <button className="button-top" id="visitedCountry-top" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'top'))}></button>
                        <button className="button-bottom" id="visitedCountry-bottom" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'bottom'))}></button>
                    </div>
                </th>
                <th className="cell">
                    <div>Is positive test</div>
                    <div className="buttons">
                        <button className="button-top" id="positiveCoronavirus-top" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'top'))}></button>
                        <button className="button-bottom" id="positiveCoronavirus-bottom" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'bottom'))}></button>
                    </div>
                </th>
                <th className="cell">
                    <div>Number of contacts</div>
                    <div className="buttons">
                        <button className="button-top" id="contactsPeople-top" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'top'))}></button>
                        <button className="button-bottom" id="contactsPeople-bottom" onClick={(e) => (sortData(e, tableDataList, setTableDataList, 'bottom'))}></button>
                    </div>
                </th>
            </tr>
        </thead>
    )
}

export default TableHeader;
