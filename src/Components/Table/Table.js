import React from 'react';
import './Table.css';
import data from '../../Config';
import { Multiselect } from 'multiselect-react-dropdown';

let value = '';

const objectAges = [
    { key: ">18", cat: "Group 1" },
    { key: "18-35", cat: "Group 1" },
    { key: "35-60", cat: "Group 1" },
    { key: ">60", cat: "Group 1" },
];

const objectCountries = [
    { key: "China", cat: "Group 2" },
    { key: "Italy", cat: "Group 2" },
    { key: "Iran", cat: "Group 2" },
]


const Row = ({ dataRow }) => {
    return <tr>
        <td className="firstname-col">{dataRow.firstName}</td>
        <td className="surname-col">{dataRow.surname}</td>
        <td className="age-col">{dataRow.ageCategory}</td>
        <td className="country-col">{dataRow.originCountry}</td>
        <td className="visited-col">{dataRow.visitedCountry}</td>
        {(dataRow.positiveCoronavirus === true) && <td>+</td>}
        {(dataRow.positiveCoronavirus === false) && <td>-</td>}
        <td className="contacts-col">{dataRow.contactsPeople.toLocaleString()}</td>
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

const startSearch = (value, tableDataList, setTableDataList, e) => {
    let newData = [];
    value.toString();
    console.log(tableDataList);
    tableDataList.forEach((person) => {
        if (person[e.target.id].includes(value) || person[e.target.id].toUpperCase().includes(value) || person[e.target.id].toLowerCase().includes(value)) {
            newData.push(person);
        }
    })
    setTableDataList(newData);
}

const selectSearch = (e, tableDataList, setTableDataList) => {
    console.log(e[0].key);
    let newData = [];
    tableDataList.forEach((person) => {
        if (Object.values(person).includes(e[0].key)) {
            newData.push(person);
        }
    })
    setTableDataList(newData);
}

const SearchArea = ({ tableDataList, setTableDataList }) => {
    return (
        <tr className="search-area" onInput={(e) => {
            if (value.length > e.target.value.length) {
                console.log('delete');
                value = e.target.value;
                console.log(value);
                console.log(data);
                setTableDataList(data);
                console.log(tableDataList);
            }

            console.log('change');
            value = e.target.value;
            startSearch(value, tableDataList, setTableDataList, e)
        }
        }>
            <td className="search-td"><input type="text" className="search-textarea" id="firstName"></input></td>
            <td className="search-td"><input type="text" className="search-textarea" id="surname"></input></td>
            <td className="search-td">
                <Multiselect
                    options= {objectAges}// Options to display in the dropdown
                    onSelect={(e) => selectSearch(e, tableDataList, setTableDataList)} // Function will trigger on select event
                    //onRemove={this.onRemove} // Function will trigger on remove event
                    displayValue="key" // Property name to display in the dropdown options
                     
                    className="search-textarea"
                    id="ageCategory"
                    placeholder="Select age category"
                />
            </td>
            <td className="search-td"><input type="text" className="search-textarea" id="originCountry"></input></td>
            <td className="search-td">
                <Multiselect
                    options= {objectCountries}// Options to display in the dropdown
                    //selectedValues={objectCountries} // Preselected value to persist in dropdown
                    onSelect={(e) => selectSearch(e, tableDataList, setTableDataList)}// Function will trigger on select event
                    //onRemove={this.onRemove} // Function will trigger on remove event
                    displayValue="key" // Property name to display in the dropdown options
                     
                    className="search-textarea"
                    id="visitedCountry"
                    placeholder="Select visited countries"
                />
            </td>
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