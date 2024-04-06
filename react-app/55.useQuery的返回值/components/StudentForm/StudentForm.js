/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import "./StudentForm.css"
import { useGetStudnetByIdQuery } from "../../store/studentApi"

const StudentForm = ({ stu = {}, setIsEdit }) => {
    // 调用钩子来加载数据

    const { data: stuData } = useGetStudnetByIdQuery(stu.id)

    const defaultValue = {
        name: "",
        age: "",
        gender: "男",
        address: "",
    }
    // 用户修改时，表单中的数据是数据库最新的数据
    const [inputData, setInputDataTmp] = useState(defaultValue)

    const setInputData = (field, value) => {
        setInputDataTmp({ ...inputData, [field]: value })
    }

    // StudentForm一加载，应该自动去加载最新的学生数据

    useEffect(() => {
        console.log(stuData, 9999)
        setInputDataTmp(stuData?.attributes || defaultValue)
    }, [stuData])

    const nameChangeHandler = (e) => {
        setInputData("name", e.target.value)
    }

    const genderChangeHandler = (e) => {
        setInputData("gender", e.target.value)
    }

    const ageChangeHandler = (e) => {
        setInputData("age", +e.target.value)
    }

    const addressChangeHandler = (e) => {
        setInputData("address", +e.target.value)
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
                    {stu.id && (
                        <>
                            <button onClick={updateHandler}>确认</button>
                            <button onClick={() => setIsEdit(false)}>
                                取消
                            </button>
                        </>
                    )}
                    {!stu.id && <button onClick={submitHandler}>添加</button>}
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
