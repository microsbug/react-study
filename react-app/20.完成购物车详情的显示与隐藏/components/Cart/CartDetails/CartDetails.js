import React from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './CartDetails.module.css'
import CartContext from '../../../store/cart-context'
import Meal from '../../Meals/Meal/Meal'

const CartDetails = () => {

    const cartCtx = React.useContext(CartContext)

    return (
        <Backdrop>
            <div
                onClick={e => e.stopPropagation()}
                className={classes.CartDetails}
            >
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear}>
                        <FontAwesomeIcon icon={faTrash} />
                        <span>清空购物车</span>
                    </div>
                </header>
                <div className={classes.MealList}>
                    {
                        cartCtx.items.map(item => {
                            return <Meal noDesc key={item.id} meal={item} />
                        })
                    }
                </div>
            </div>
        </Backdrop>
    )
}

export default CartDetails