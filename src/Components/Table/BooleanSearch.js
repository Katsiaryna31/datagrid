import data from '../../Config';

const booleanSearch = (value, tableDataList, setTableDataList) => {
    const newData = [];
    let newValue;
    if (value === 'All') {
        setTableDataList(data); 
    } else if (value === 'true') {
        newValue = true;
    } else if (value === 'false') {
        newValue = false;
    }
    tableDataList.forEach((person) => {
        if (person.positiveCoronavirus === newValue)  {
            console.log(person);
            newData.push(person);
        }
    })
    setTableDataList(newData);
}

export default booleanSearch;