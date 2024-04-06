import React, { useCallback, useContext, useState } from 'react'
import StuContext from '../../../store/StuContext'
import StudentForm from '../../StudentForm/StudentForm'

// const Student = ({stu: {id, attributes: {name, age, gender, address}}}) => {
const Student = (props) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isEdit, setIsEdit] = useState(false)


    const ctx = useContext(StuContext)

    const deleteHandler = () => {
        deleteStudent()
    }

    const deleteStudent = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)

            const res = await fetch(`http://localhost:1337/api/students/${props.stu.id}`, {
                method: 'DELETE'
            })

            if (!res.ok) {
                throw new Error('删除失败')
            }

            // 被删除的数据
            // const data = await res.json()

            // 修改成功之后，重新获取数据
            ctx.fetchData()

            console.log('删除成功')
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }, [])

    const cancellEdit = () => {
        setIsEdit(false)
    }

    return (
        <>
            {!isEdit &&
                <tr>
                    <td>{props.stu.attributes.name}</td>
                    <td>{props.stu.attributes.age}</td>
                    <td>{props.stu.attributes.gender}</td>
                    <td>{props.stu.attributes.address}</td>
                    <td>
                        <button onClick={deleteHandler}>删除</button>
                        <button onClick={() => setIsEdit(true)}>修改</button>

                    </td>
                </tr>
            }

            {isEdit && <StudentForm stu={props.stu} onCancel={cancellEdit} />}
            {loading && <tr>
                <td colSpan={5}>正在删除数据...</td>
            </tr>}
            {error && <tr>
                <td colSpan={5}>删除失败...</td>
            </tr>}

        </>
    )
}

export default Student