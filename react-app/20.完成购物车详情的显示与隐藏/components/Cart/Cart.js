import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import imgIcon from '../../asset/bag.png'
import CartContext from '../../store/cart-context'
import CartDetails from './CartDetails/CartDetails'

const Cart = () => {

    const cartCtx = useContext(CartContext)

    // 添加一个state来控制详情是否显示
    const [showDetails, setShowDetails] = useState(false)

    // 添加一个显示详情页的函数
    const toggleDetailsHandler = () => {
        if (cartCtx.totalAmount === 0) return
        setShowDetails(prevState => !prevState)
    }

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>

            {/*引入购物车详情*/}
            {
                showDetails && <CartDetails />
            }

            <div className={classes.Icon}>
                <img src={imgIcon} alt='' />
                {cartCtx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>
                    {cartCtx.totalAmount}
                </span>}
            </div>

            {cartCtx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> :
                <p className={classes.Price}> {cartCtx.totalPrice}
                </p>}
            <button className={`${classes.Button} ${cartCtx.totalAmount === 0 ? classes.Disabled : ''}`}>去结算</button>
        </div>
    )
}

export default Cart