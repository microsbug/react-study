import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from './store';

const App = () => {

  // useSelector: 用来加载state中的数据
  const student = useSelector(state => state.stu);

  // 通过useDispatch()来获取派发器的对象
  const dispatch = useDispatch();
  // 获取action的构建器

  const setNameHandler = () => {
    dispatch(setName('李四'));
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
    </div>
  );
};

export default App;