import React, { useState } from "react"
import StudentForm from "../../StudentForm/StudentForm"

const Student = ({ stu = {} }) => {
    const { attributes = {} } = stu
    const cols = ["name", "age", "gender", "address"]
    const [isEdit, setIsEdit] = useState(false)

    const deleteHandler = () => {}

    const tableTr = (
        <tr>
            {cols.map((o) => (
                <td key={o}>{attributes[o]}</td>
            ))}
            <td>
                <button onClick={deleteHandler}>删除</button>
                <button onClick={() => setIsEdit(true)}>修改</button>
            </td>
        </tr>
    )

    return !isEdit ? tableTr : <StudentForm stu={stu} setIsEdit={setIsEdit} />
}

export default Student
