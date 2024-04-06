import { useState } from 'react'
import './App.css'
const App = () => {
  console.log('函数执行了-- > 组件创建完毕!')
  /**
   * 在React中,当组件渲染完毕后,在修改组件中的变量,不会使组件重新渲染
   *    要使得组件可以受到变量的影响,必须在组件修改后对组件进行重新渲染
   *    这里我们就需要一个特殊的变量,当组件修改时,组件会自动重新渲染
   *
   * state相当于是一个变量,
   *    只是这个变量在React中进行了注册,
   *    React会监控这个变量的变化,当state发生变化的时候,会自动触发组件的重新渲染
   *    使得我们的修改可以在页面中进行呈现
   *
   * 在函数式组件中,我们需要通过钩子函数,获取state
   *    使用useState()函数,可以获取state
   *      import {useState} from 'react'
   *    它需要一个值作为参数,这个值就是state的初始值
   *      - 该函数会返回一个数组
   *        1.数组中的第一个元素就是初始值
   *          初始值只用来显示数据,直接修改不会触发组件的重新渲染
   *        2.数组中的第二个元素就是一个函数,这个函数可以修改state的值,通常命名为setXxx,调用其修改state会触发组件的重新渲染,
   *            并且使用函数中的值作为新的state
   */

  /**
   * state:
   *  - state实际上就是一个被React管理的变量
   *      当我们通过setState()函数修改state的值,会触发组件的重新渲染
   *  - 只有state值发生变化时,组件才会重新渲染
   *  - 当state值是一个对象时,修改时使用新的对象去替已有对象
   *  - 当通过setState去修改一个state的时,并不表示修改当前的state, 它修改的是组件下一次渲染的state
   *  - setState()会触发组件的重新渲染,它是异步的
   *      所以当调用setState()需要用到旧state的值的时候,一定要注意, 有可能会出现计算错误的情况
   *      为了避免这种情况,可以使用通过setState()传递回调函数的形式来修改state值
   */

  // 将下述简写
  /* const result = useState(1)
  let counter = result[0]
  let setCounter = result[1] */
  const [counter, setCounter] = useState(1)
  const [user, setUser] = useState({ name: '张三', age: 18 })

  /**
   * 当点击+时,数字增大
   * 当点击-时,数字减小
   */

  // 创建一个变量存储数据
  // let counter = 1
  const addHandler = () => {
    // counter++
    setTimeout(() => {
      setCounter(prevCounter => {
        /**
         * setState()中回调函数的返回值将会成为新的state值
         *    在回调函数执行时,React会将最新的state值作为参数传递
         */
        return prevCounter + 1
      })

      // setCounter(prevCounter => prevCounter + 1)

      // setCounter(counter + 1)
    }, 1000)
    // console.log(counter)
    /* const h1 = document.querySelector('h1')
    const num = parseInt(h1.innerText)
    h1.innerText = num + 1 */
  }

  const subHandler = () => {
    // counter--
    setCounter(counter - 1)
    // console.log(counter)
    /* const h1 = document.querySelector('h1')
    const num = parseInt(h1.innerText)
    h1.innerText = num - 1 */
  }

  const updateUserHandler = () => {
    // 如果直接修改旧的state,由于对象还是那个对象,所以不会生效
    // user.name = '李四'
    // console.log(user)
    // setUser(user)

    // setUser({ name: '李四', age: 20 })

    // const newUser = Object.assign({}, user)
    // newUser.name = '李四'
    // setUser(newUser)
    // console.log(newUser)

    setUser({ ...user, name: '李四' })
  }

  return (
    <div className="app">
      <h1>
        {counter} -- {user.name} -- {user.age}
      </h1>
      <button onClick={addHandler}>+</button>
      <button onClick={subHandler}>-</button>
      <br />
      <button onClick={updateUserHandler}>修改用户信息</button>
    </div>
  )
}

export default App
