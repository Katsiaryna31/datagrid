import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import startSearch from './StartSearch';
import selectSearch from './SelectSearch';
import ToggleButtons from './ToggleButtons';


let valueInput = '';

const objectAges = [
    { key: "18 and below" },
    { key: "19-35" },
    { key: "35-59" },
    { key: "60 and upper" }
];

const objectCountries = [
    { key: "China" },
    { key: "Italy" },
    { key: "Iran" }
];

const SearchArea = ({ tableDataList, setTableDataList, conditions, setConditions}) => {
    return (
        <tr className="search-area" onInput={(e) => {
            valueInput = e.target.value;
            startSearch(valueInput, tableDataList, setTableDataList, e)
        }
        }>
            <td className="search-td"><input type="text" className="search-textarea" id="firstName"></input></td>
            <td className="search-td"><input type="text" className="search-textarea" id="surname"></input></td>
            <td className="search-td">
                <Multiselect
                    options={objectAges}
                    onSelect={(e) => selectSearch(e, tableDataList, setTableDataList)}
                    onRemove={(e) => selectSearch(e, tableDataList, setTableDataList)}
                    displayValue="key"
                    className="search-textarea"
                    id="ageCategory"
                    placeholder="Select age category"
                />
            </td>
            <td className="search-td"><input type="text" className="search-textarea" id="originCountry"></input></td>
            <td className="search-td">
                <Multiselect
                    options={objectCountries}
                    onSelect={(e) => selectSearch(e, setTableDataList)}
                    onRemove={(e) => selectSearch(e, setTableDataList)}
                    displayValue="key" 
                    className="search-textarea"
                    id="visitedCountry"
                    placeholder="Select visited countries"
                />
            </td>
            <td>
                <ToggleButtons tableDataList={tableDataList} setTableDataList={setTableDataList} conditions={conditions} setConditions={setConditions}/>
            </td>
            <td className="search-td"><input type="text" className="search-textarea" id="contactsPeople"></input></td>
        </tr>
    )
}

export default SearchArea;