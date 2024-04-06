import { createSlice } from '@reduxjs/toolkit';

// createSlice:用来创建reducer的切片
// 它需要一个配置对象作为参数，通过对象的不同属性来指定它的配置
const stuSlice = createSlice({
  name: 'stu', // 用来自动生成action中的type
  initialState: { // state的初始值
    name: '张三',
    age: 18,
    sex: '男',
    address: '北京'
  }, // 切片的初始状态
  reducers: { // 指定state的各种操作，直接在对象中添加方法
    // 可以通过不同的方法来制定对state的不同操作
    // 两个参数：state 这个state是一个代理对象，可以直接修改
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  }
})


// 切片对象会自动帮助我们生成action
// actions中存储的是slice自动生成的action创造器（函数），调用函数后会自动创建action对象
// action对象的结构：{type: name/函数名，payload: 函数的参数}
// console.log(stuSlice.actions)
export const { setName, setAge } = stuSlice.actions
export const { reducer: stuReducer } = stuSlice