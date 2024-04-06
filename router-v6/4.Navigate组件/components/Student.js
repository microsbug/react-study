import React from 'react'
import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'

const STU_DATA = [
    {
        id: 1,
        name: '珊珊'
    },
    {
        id: 2,
        name: '杰杰'
    },
    {
        id: 3,
        name: '妹妹'
    },
    {
        id: 4,
        name: '灵儿'
    }
]
const Student = () => {

    // 可以使用useParams()来获取参数
    const {id} = useParams()

    const location = useLocation() // 用来获取地址的信息
    // console.log(location)

    /**
     * 如果路径匹配返回一个对象，如果不匹配则返回一个null
     */
    const match = useMatch('/student/:id') // 用来检测当前url是否匹配某个路由
    // console.log(match)

    // useNavigate() 获取用于跳转页面的函数
    const nav = useNavigate()

    const stu = STU_DATA.find(item => item.id === +id)

    const clickHandler = () => {
        // nav('/about') // 使用push，会产生历史记录
        nav('/about', {replace: true}) // 使用replace，不会产生历史记录
    }

    return (
        <div>
            <button onClick={clickHandler}>点我一下</button>
            <h2>{stu.id} --- {stu.name}</h2>
        </div>
    )
}

export default Student