import React, { useContext } from 'react'
import classes from './Cart.module.css'
import imgIcon from '../../asset/bag.png'
import CartContext from '../../store/cart-context'

const Cart = () => {

    const cartCtx = useContext(CartContext)

    return (
        <div className={classes.Cart}>
            <div className={classes.Icon}>
                <img src={imgIcon} alt='' />
                <span className={classes.TotalAmount}>
                    {cartCtx.totalAmount}
                </span>
            </div>
            <p className={classes.Price}>
                {cartCtx.totalPrice}
            </p>
            <button className={classes.Button}>去结算</button>
        </div>
    )
}

export default Cart