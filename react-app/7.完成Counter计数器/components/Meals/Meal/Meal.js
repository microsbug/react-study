import React from "react"
import classes from "./Meal.module.css"
import Counter from "../../UI/Counter/Counter"

/**
 * 食物组件
 */
const Meal = () => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src="img/meals/1.png" alt="" />
            </div>
            <div>
                <h2 className={classes.Title}>汉堡包</h2>
                <span className={classes.Desc}>
                    百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！
                </span>
                <div className={classes.PriceWrapper}>
                    <span className={classes.Price}>12</span>
                    <Counter amount={20} />
                </div>
            </div>
        </div>
    )
}

export default Meal
