import React from 'react'

const Student = ({stu: {name, age, gender, address}}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{address}</td>
        </tr>
    )
}

export default Student