const selectSearch = (e, tableDataList, setTableDataList) => {
    const newData = [];
    tableDataList.forEach((person) => {
            e.forEach((event) => {
            if (Object.values(person).includes(event.key)) {
                newData.push(person);
            }
        })
    })
    setTableDataList(newData);
}

export default selectSearch;