import React from 'react';
import './StudentList.css';
import Student from "./Student";
import StudentForm from "./StudentForm";
import {useGetStudentsQuery} from "../../store/api/studentApi";

const StudentList = (props) => {

    const {data: stus, isSuccess} = useGetStudentsQuery();

    return (
            <table>
                <caption>学生列表</caption>
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>地址</th>
                    <th>操作</th>
                </tr>
                </thead>

                <tbody>

                {isSuccess && stus.map(stu => <Student key={stu.id} stu={stu}/> )}

                </tbody>

                <tfoot>
                    <StudentForm/>
                </tfoot>

            </table>
    );
};

export default StudentList;
