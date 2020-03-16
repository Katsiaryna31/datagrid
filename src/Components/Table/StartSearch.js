import data from '../../Config';

const startSearch = (value, tableDataList, setTableDataList, e) => {
    console.log(typeof tableDataList[0][e.target.id]);
    console.log(e.target.id);
    const newData = [];
    if (e.target.id === 'contactsPeople') {
        const newValue = Number(value)
        data.forEach((person) => {
            if (person[e.target.id] === newValue) {
                newData.push(person);
            }
        })
    } else {
        tableDataList.forEach((person) => {
            if (person[e.target.id].includes(value) || person[e.target.id].toUpperCase().includes(value) || person[e.target.id].toLowerCase().includes(value)) {
                newData.push(person);
            }
        })
    }
    setTableDataList(newData);
}

export default startSearch;