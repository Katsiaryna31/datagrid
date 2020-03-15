import React from 'react';

const Row = ({ dataRow }) => {
    return <tr>
        <td className="firstname-col">{dataRow.firstName}</td>
        <td className="surname-col">{dataRow.surname}</td>
        <td className="age-col">{dataRow.ageCategory}</td>
        <td className="country-col">{dataRow.originCountry}</td>
        <td className="visited-col">{dataRow.visitedCountry}</td>
        {(dataRow.positiveCoronavirus === true) && <td>+</td>}
        {(dataRow.positiveCoronavirus === false) && <td>-</td>}
        <td className="contacts-col">{dataRow.contactsPeople.toLocaleString()}</td>
    </tr>
}

export default Row;