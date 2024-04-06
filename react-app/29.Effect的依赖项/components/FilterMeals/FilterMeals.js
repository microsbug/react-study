import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'

const FilterMeals = (props) => {

    const [keyWord, setKeyWord] = useState('')

    // 通过Effect改造联系

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
