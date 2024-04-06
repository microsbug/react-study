import React from 'react'
import classes from './Meal.module.css'
import Counter from '../../UI/Counter/Counter'

/**
 * 食物组件
 */
const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={props.meal.img} alt='' />
            </div>
            <div>
                <h2 className={classes.Title}>{props.meal.title}</h2>
                <span className={classes.Desc}>
                    {props.meal.desc}
                </span>
                <div className={classes.PriceWrapper}>
                    <span className={classes.Price}>
                        {props.meal.price}
                    </span>
                    <Counter amount={props.meal.amount} />
                </div>
            </div>
        </div>
    )
}

export default Meal
