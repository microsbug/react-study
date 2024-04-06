import React, { useState } from 'react'
import './StudentForm.css'

const StudentForm = () => {

    const [inputData, setInputData] = useState({
        name: '',
        age: '',
        gender: '',
        address: ''
    })

    const nameChangeHandler = (e) => {
        setInputData({
            ...inputData,
            name: e.target.value
        })
    }

    const genderChangeHandler = (e) => {
        setInputData({
            ...inputData,
            gender: e.target.value
        })
    }

    const ageChangeHandler = (e) => {
        setInputData({
            ...inputData,
            age: e.target.value
        })
    }

    const addressChangeHandler = (e) => {
        setInputData({
            ...inputData,
            address: e.target.value
        })
    }

    const submitHandler = () => {
        console.log(inputData)
    }

    return (
        <tr className='student-form'>
            <td><input onChange={nameChangeHandler} value={inputData.name} type='text' /></td>
            <td>
                <select onChange={genderChangeHandler} value={inputData.gender}>
                    <option value='男'>男</option>
                    <option value='女'>女</option>
                </select>
            </td>
            <td><input value={inputData.age} onChange={ageChangeHandler} type='text' /></td>
            <td><input value={inputData.address} onChange={addressChangeHandler} type='text' /></td>
            <td>
                <button onClick={submitHandler}>添加</button>
            </td>
        </tr>
    )
}

export default StudentForm