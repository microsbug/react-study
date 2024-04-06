import React, { useCallback, useContext, useState } from 'react'
import StuContext from '../../../store/StuContext'

const Student = ({stu: {id, attributes: {name, age, gender, address}}}) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const ctx = useContext(StuContext)

    const deleteHandler = () => {
        deleteStudent()
    }

    const deleteStudent = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)

            const res = await fetch(`http://localhost:1337/api/students/${id}`, {
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

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <td>{address}</td>
                <td>
                    <button onClick={deleteHandler}>删除</button>
                </td>
            </tr>

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