const startSearch = (value, tableDataList, setTableDataList, e) => {
    console.log(tableDataList);
    const newData = [];
    value.toString();
    tableDataList.forEach((person) => {
        if (person[e.target.id].includes(value) || person[e.target.id].toUpperCase().includes(value) || person[e.target.id].toLowerCase().includes(value)) {
            newData.push(person);
        }
    })
    setTableDataList(newData);
}

export default startSearch;