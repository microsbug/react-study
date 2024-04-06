import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'

const FilterMeals = (props) => {

    const InputChangeHandler = (event) => {
        // console.log(event.target.value)
        const keyword = event.target.value.trim()
        props.onFilter(keyword)
    }

    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input
                    onChange={InputChangeHandler}
                    className={classes.SearchInput}
                    type='text'
                    placeholder={'请输入关键字'}
                />
                <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
            </div>
        </div>
    )
}

export default FilterMeals