import React from 'react'
import './Card.css'

const Card = props => {
  /**
   * props.children: 通过props传递的子组件
   * className={`card ${props.className}`} : 通过className属性动态添加样式
   */
  // console.log(props.children)
  return <div className={`card ${props.className}`}>{props.children}</div>
}

export default Card
