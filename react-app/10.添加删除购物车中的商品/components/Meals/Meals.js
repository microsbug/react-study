import React from 'react'
import Meal from './Meal/Meal'
import classes from './Meals.module.css'

/**
 * 食物列表的组件
 */
const Meals = (props) => {
    return (
        // 现在将滚动条设置给了Meals组件
        <div className={classes.Meals}>
            {
                props.mealsData.map(item =>
                    <Meal
                        onAdd={props.onAddMeal}
                        onRemove={props.onRemoveMeal}
                        key={item.id}
                        meal={item} />)
            }
        </div>
    )
}

export default Meals
