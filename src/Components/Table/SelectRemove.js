import data from '../../Config';

const removeSearch = (e, setTableDataList, selectCounter, setSelectCounter) => {
    selectCounter--;
    setSelectCounter(selectCounter);
    setTableDataList(data);
}

export default removeSearch;