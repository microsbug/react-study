import React, { useCallback, useContext, useState } from 'react'
import './StudentForm.css'
import StuContext from '../../store/StuContext'

const StudentForm = (props) => {

    const [inputData, setInputData] = useState({
        name: props.stu ? props.stu.attributes.name : '',
        age: props.stu ? props.stu.attributes.age : '',
        gender: props.stu ? props.stu.attributes.gender : '男',
        address: props.stu ? props.stu.attributes.address : ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const ctx = useContext(StuContext)

    // 创建一个添加学生的方法
    const addStudent = useCallback(async () => {

        try {
            setLoading(true)
            setError(null)
            // http://localhost:1337/api/students
            const res = await fetch('http://localhost:1337/api/students', {
                method: 'POST',
                body: JSON.stringify({data: inputData}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!res.ok) {
                throw new Error('添加失败')
            }

            // 添加成功之后，重新获取数据
            ctx.fetchData()
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }, [inputData, ctx])

    const updateStudent = useCallback(async (id, newStu) => {
        try {
            setLoading(true)
            setError(null)
            const res = await fetch(`http://localhost:1337/api/students/${id}`, {
                method: 'PUT',
                body: JSON.stringify({data: newStu}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!res.ok) {
                throw new Error('修改失败')
            }

            // 修改成功之后，重新获取数据
            ctx.fetchData()
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }, [ctx])

    const nameChangeHandler = (e) => {
        setInputData(prevState => {
            return {
                ...prevState,
                name: e.target.value
            }
        })
    }

    const genderChangeHandler = (e) => {
        setInputData(prevState => {
            return {
                ...prevState,
                gender: e.target.value
            }
        })
    }

    const ageChangeHandler = (e) => {
        setInputData(prevState => {
            return {
                ...prevState,
                age: +e.target.value
            }
        })
    }

    const addressChangeHandler = (e) => {
        setInputData(prevState => {
            return {
                ...prevState,
                address: e.target.value
            }
        })
    }

    const submitHandler = () => {
        // console.log(inputData)
        addStudent()
    }

    const updateHandler = () => {
        updateStudent(props.stu.id, inputData)
    }

    return (
        <>
            <tr className='student-form'>
                <td><input onChange={nameChangeHandler} value={inputData.name} type='text' /></td>
                <td><input value={inputData.age} onChange={ageChangeHandler} type='text' /></td>
                <td>
                    <select onChange={genderChangeHandler} value={inputData.gender}>
                        <option value='男'>男</option>
                        <option value='女'>女</option>
                    </select>
                </td>
                <td><input value={inputData.address} onChange={addressChangeHandler} type='text' /></td>
                <td>
                    {props.stu && <>
                        <button onClick={updateHandler}>确认</button>
                        <button onClick={() => props.onCancel()}>取消</button>
                    </>}
                    {
                        !props.stu && <button onClick={submitHandler}>添加</button>
                    }
                </td>
            </tr>
            {loading && <tr>
                <td colSpan={5}>正在添加数据...</td>
            </tr>}
            {error && <tr>
                <td colSpan={5}>添加失败...</td>
            </tr>}
        </>
    )
}

export default StudentForm