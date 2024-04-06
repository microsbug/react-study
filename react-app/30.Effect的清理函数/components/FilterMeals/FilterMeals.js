import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'

const FilterMeals = (props) => {

    const [keyWord, setKeyWord] = useState('')

    // 通过Effect改造联系
    useEffect(() => {
        // 降低数据过滤的次数，提高用户体验
        // 用户输入完了你在过滤，用户输入过程中,不要过滤
        // 当用户停止输入1s后，才进行查询
        // 在开启一个定时器的同时，应该关闭上一个
        const timer = setTimeout(() => {
            console.log('Effect触发了！')
            props.onFilter(keyWord)
        }, 1000)

        // console.log('effect执行了！')

        // 在Effect回调函数中，可以指定一个回调函数作为返回值
        // 这个函数可以称其为返回函数，它会在下次effect执行前指定
        // 可以在这个函数中,做一些工作来清理上次effect执行所带来的影响
        return () => {
            // console.log('effect返回函数执行了！')
            clearTimeout(timer)
        }

    }, [keyWord, props])

    const InputChangeHandler = (event) => {

        setKeyWord(event.target.value.trim())

        // console.log(event.target.value)
        // const keyword = event.target.value.trim()
        // props.onFilter(keyword)
    }

    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input
                    value={keyWord}
                    onChange={InputChangeHandler}
                    className={classes.SearchInput}
                    type='text'
                    placeholder={'请输入关键字'}
                />
                <FontAwesomeIcon
                    className={classes.SearchIcon}
                    icon={faSearch}
                />
            </div>
        </div>
    )
}

export default FilterMeals
