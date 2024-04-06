import React, { useState } from "react"
import "./StudentForm.css"

const StudentForm = (props) => {
    const [inputData, setInputData] = useState({
        name: props.stu ? props.stu.attributes.name : "",
        age: props.stu ? props.stu.attributes.age : "",
        gender: props.stu ? props.stu.attributes.gender : "男",
        address: props.stu ? props.stu.attributes.address : "",
    })

    const nameChangeHandler = (e) => {
        setInputData((prevState) => {
            return {
                ...prevState,
                name: e.target.value,
            }
        })
    }

    const genderChangeHandler = (e) => {
        setInputData((prevState) => {
            return {
                ...prevState,
                gender: e.target.value,
            }
        })
    }

    const ageChangeHandler = (e) => {
        setInputData((prevState) => {
            return {
                ...prevState,
                age: +e.target.value,
            }
        })
    }

    const addressChangeHandler = (e) => {
        setInputData((prevState) => {
            return {
                ...prevState,
                address: e.target.value,
            }
        })
    }

    const submitHandler = () => {}

    const updateHandler = () => {}

    return (
        <>
            <tr className="student-form">
                <td>
                    <input
                        onChange={nameChangeHandler}
                        value={inputData.name}
                        type="text"
                    />
                </td>
                <td>
                    <input
                        value={inputData.age}
                        onChange={ageChangeHandler}
                        type="text"
                    />
                </td>
                <td>
                    <select
                        onChange={genderChangeHandler}
                        value={inputData.gender}
                    >
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </td>
                <td>
                    <input
                        value={inputData.address}
                        onChange={addressChangeHandler}
                        type="text"
                    />
                </td>
                <td>
                    {props.stu && (
                        <>
                            <button onClick={updateHandler}>确认</button>
                            <button onClick={() => props.onCancel()}>
                                取消
                            </button>
                        </>
                    )}
                    {!props.stu && (
                        <button onClick={submitHandler}>添加</button>
                    )}
                </td>
            </tr>
            {/* {loading && (
                <tr>
                    <td colSpan={5}>正在添加数据...</td>
                </tr>
            )}
            {error && (
                <tr>
                    <td colSpan={5}>添加失败...</td>
                </tr>
            )} */}
        </>
    )
}

export default StudentForm
