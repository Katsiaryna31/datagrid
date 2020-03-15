const selectSearch = (e, tableDataList, setTableDataList) => {
    const selectArray = [];
    selectArray.push(e[0].key);
    console.log(selectArray);
    let newData = [];
    tableDataList.forEach((person) => {
        if (Object.values(person).includes(e[0].key)) {
            newData.push(person);
        }
    })
    setTableDataList(newData);
}

export default selectSearch;