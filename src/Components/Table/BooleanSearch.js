import data from '../../Config';

const booleanSearch = (value, tableDataList, setTableDataList) => {
    const newData = [];
    let newValue;
    if (value === 'All') {
        data.forEach((person) => {
            newData.push(person);
        })
    } else if (value === 'true') {
        newValue = true;
    } else if (value === 'false') {
        newValue = false;
    }
    tableDataList.forEach((person) => {
        if (person.positiveCoronavirus === newValue)  {
            newData.push(person);
        }
    })
    setTableDataList(newData);
}

export default booleanSearch;