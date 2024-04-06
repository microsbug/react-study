// 使用RTK来构建store
import { configureStore } from '@reduxjs/toolkit';
import { stuReducer } from './stuSlice';
import { schoolReducer } from './schoolSlice';

// 创建store 用来创建store对象，需要一个配置对象作为参数
const store = configureStore({
  reducer: {
    // reducer是reducer的集合，可以将多个reducer合并成一个reducer
    // reducer的key就是reducer的name
    // reducer的value就是reducer的函数
    stu: stuReducer,
    school: schoolReducer
  }
})

export default store