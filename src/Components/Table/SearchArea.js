import React from 'react';
import data from '../../Config';
import { Multiselect } from 'multiselect-react-dropdown';
import startSearch from './StartSearch';
import selectSearch from './SelectSearch';
import removeSearch from './SelectRemove';
import ToggleButtons from './ToggleButtons';


let valueInput = '';

const objectAges = [
    { key: "18 and below" },
    { key: "19-35" },
    { key: "35-60" },
    { key: "60 and upper" }
];

const objectCountries = [
    { key: "China" },
    { key: "Italy" },
    { key: "Iran" }
];

const SearchArea = ({ tableDataList, setTableDataList, conditions, setConditions }) => {
    return (
        <tr className="search-area" onInput={(e) => {
            if (valueInput.length > e.target.value.length) {
                console.log('delete');
                valueInput = e.target.value;
                console.log(valueInput);
                console.log(data);
                setTableDataList(data);
                console.log(tableDataList);
            }

            console.log('change');
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
                    onRemove={(e) => removeSearch(e, setTableDataList)}
                    displayValue="key"

                    className="search-textarea"
                    id="ageCategory"
                    placeholder="Select age category"
                />
            </td>
            <td className="search-td"><input type="text" className="search-textarea" id="originCountry"></input></td>
            <td className="search-td">
                <Multiselect
                    options={objectCountries}// Options to display in the dropdown
                    //selectedValues={objectCountries} // Preselected value to persist in dropdown
                    onSelect={(e) => selectSearch(e, tableDataList, setTableDataList)}// Function will trigger on select event
                    //onRemove={this.onRemove} // Function will trigger on remove event
                    displayValue="key" // Property name to display in the dropdown options

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