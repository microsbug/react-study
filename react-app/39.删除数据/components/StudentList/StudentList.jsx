import React from 'react'
import Student from './Student/Student'
import './StudentList.css'

const StudentList = (props) => {
    return (
        <div>
            <table>
                <caption>学生列表</caption>
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>地址</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.stuData.map(stu => <Student key={stu.id} stu={stu} />)
                }

                </tbody>
            </table>
        </div>
    )
}

export default StudentList