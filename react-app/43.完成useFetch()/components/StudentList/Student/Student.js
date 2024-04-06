import React, { useCallback, useContext, useState } from 'react'
import StuContext from '../../../store/StuContext'
import StudentForm from '../../StudentForm/StudentForm'
import useFetch from '../../../hooks/useFetch'

// const Student = ({stu: {id, attributes: {name, age, gender, address}}}) => {
const Student = (props) => {

    const ctx = useContext(StuContext)
    const [isEdit, setIsEdit] = useState(false)

    const {error, loading, fetchData: delStu} = useFetch({
        url: `students/${props.stu.id}`,
        method: 'DELETE'
    }, ctx.fetchData)

    const deleteHandler = () => {
        delStu()
    }

    const CancelEdit = () => {
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

            {isEdit && <StudentForm stu={props.stu} onCancel={CancelEdit} />}
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