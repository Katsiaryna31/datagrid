const sortData = (e, tableDataList, setTableDataList, sortOrder) => {
    const activeButton = document.querySelector('.button-active');
    if (activeButton !== null) {
        activeButton.classList.remove('button-active');
    }
    e.target.classList.add('button-active');
    const sortingColumnName = e.target.id.split('-')[0];
    const sortingData = [];
    if (sortOrder === 'top') {
        tableDataList.sort((a, b) => {
            if (a[sortingColumnName] > b[sortingColumnName]) {
                return 1;
            }
            if (a[sortingColumnName] < b[sortingColumnName]) {
                return -1;
            }
            return 0;
        });
    } else {
        tableDataList.sort((a, b) => {
            if (a[sortingColumnName] < b[sortingColumnName]) {
                return 1;
            }
            if (a[sortingColumnName] > b[sortingColumnName]) {
                return -1;
            }
            return 0;
        });
    }
    tableDataList.forEach((person) => {
        sortingData.push(person);
    })
    console.log(sortingData);
    setTableDataList(sortingData);
}

export default sortData;