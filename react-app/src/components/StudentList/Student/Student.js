import React, { useState } from "react"
import StudentForm from "../../StudentForm/StudentForm"
import { useDelStudentMutation } from "../../../store/studentApi"

const Student = ({ stu = {} }) => {
    // 获取删除的钩子,useMutation的钩子返回的是一个数组
    // 数组中有两个东西：第一个是操作的触发器，第二个是结果集
    const [delStudent] = useDelStudentMutation()

    const { attributes = {} } = stu
    const cols = ["name", "age", "gender", "address"]
    const [isEdit, setIsEdit] = useState(false)

    const deleteHandler = () => {
        delStudent(stu.id).then(() => {
            alert("删除成功")
        })
        setIsEdit(false)
    }

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
