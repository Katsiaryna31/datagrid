import data from '../../Config';

const ageSelectArray = [];
const countrySelectArray=[];
let newData = [];

const selectSearch = (e, tableDataList, setTableDataList, ageSelectCounter, setAgeSelectCounter, countrySelectCounter, setCountrySelectCounter) => {
    if (e[0].Id === 'ageCategory') {
        ageSelectCounter++;
        ageSelectArray.push(e[ageSelectCounter - 1].key)
        setAgeSelectCounter(ageSelectCounter);
        data.forEach((person) => {
            if (Object.values(person).includes(e[ageSelectCounter - 1].key)) {
                newData.push(person);
            }
        })
    } else {
        countrySelectCounter++;
        countrySelectArray.push(e[countrySelectCounter - 1].key)
        setCountrySelectCounter(countrySelectCounter);
        data.forEach((person) => {
            if (Object.values(person).includes(e[countrySelectCounter - 1].key)) {
                newData.push(person);
            }
        })
    }
    setTableDataList(newData);
}

export default selectSearch;