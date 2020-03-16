const searchNumber = (value, tableDataList, setTableDataList) => {
    const newData = [];
    
    tableDataList.forEach((person) => {
        if (person.contactsPeople === value) {
            console.log(typeof person.contactsPeople);
            newData.push(person);
        }
    })
    if (newData.length > 0) {
        setTableDataList(newData);
    }
}

export default searchNumber ;