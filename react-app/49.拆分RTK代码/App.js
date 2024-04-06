import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setName } from "./store/stuSlice"
import { setName as setSchoolName } from "./store/schoolSlice"

const App = () => {
    // useSelector: 用来加载state中的数据
    // const student = useSelector(state => state.stu);
    // 引入学校的state
    // const school = useSelector(state => state.school);

    const { student, school } = useSelector((state) => state)

    // 通过useDispatch()来获取派发器的对象
    const dispatch = useDispatch()
    // 获取action的构建器

    const setNameHandler = () => {
        dispatch(setName("李四"))
        // dispatch({ type: 'stu/setName', payload: '李四' })
    }

    return (
        <div>
            {/* <p>{JSON.stringify(student)}</p> */}
            <p>{student.name}</p>
            <p>{student.age}</p>
            <p>{student.sex}</p>
            <p>{student.address}</p>
            <button onClick={setNameHandler}>修改student的name属性</button>
            <br />
            <p>{school.name}</p> --- <p>{school.address}</p>
            {/* <button onClick={() => dispatch({ type: 'school/setName', payload: '北京大学' })}>修改school的name属性</button> */}
            <button onClick={() => dispatch(setSchoolName("北京大学"))}>
                修改school的name属性
            </button>
        </div>
    )
}

export default App
