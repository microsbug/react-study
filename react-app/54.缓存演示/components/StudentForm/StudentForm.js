import React, { useEffect, useState } from "react"
import "./StudentForm.css"
import { useGetStudnetByIdQuery } from "../../store/studentApi"

const StudentForm = (props) => {
    // 调用钩子来加载数据
    const { data: stuData, isSuccess } = useGetStudnetByIdQuery(props.stuId)
    console.log(props)

    // 用户修改时，表单中的数据是数据库最新的数据
    const [inputData, setInputData] = useState({
        name: "",
        age: "",
        gender: "男",
        address: "",
    })

    // StudentForm一加载，应该自动去加载最新的学生数据

    useEffect(() => {
        if (isSuccess) {
            setInputData(stuData.attributes)
        }
        // 这里依赖项加上stuData.attributes 为哈报错?
        // 因为stuData.attributes 是一个对象，对象是引用类型，当引用类型作为依赖项时，只要引用对象的属性值改变，就会重新执行useEffect
    }, [isSuccess, stuData?.attributes])

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
                    {props.stuId && (
                        <>
                            <button onClick={updateHandler}>确认</button>
                            <button onClick={() => props.onCancel()}>
                                取消
                            </button>
                        </>
                    )}
                    {!props.stuId && (
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
