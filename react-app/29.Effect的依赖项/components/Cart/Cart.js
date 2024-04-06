import React, { useContext, useEffect, useState } from 'react'
import classes from './Cart.module.css'
import imgIcon from '../../asset/bag.png'
import CartContext from '../../store/cart-context'
import CartDetails from './CartDetails/CartDetails'
import Checkout from './Checkout/Checkout'

/**
 * 购物车的组件
 */
const Cart = () => {

    const cartCtx = useContext(CartContext)

    // 添加一个state来控制详情是否显示
    const [showDetails, setShowDetails] = useState(false)

    // 添加一个state控制结账页的显示与隐藏
    const [showCheckout, setShowCheckout] = useState(false)

    // 在组件每次重新渲染的时候，检查以下商品的总数量，如果数量为0，则修改showDetails为false
    // 组件每次重新渲染，组件的函数体就会执行
    // 以下代码会报错(Too many re-renders.)

    /**
     * 默认情况下，useEffect()中的函数，会在组件渲染完成后调用，
     *      并且是每次渲染完成后都会调用
     * 在useEffect()可以传递第二个参数，
     *      第二个参数是一个数组，在数组中可以指定Effect的依赖项
     *      制定后，只有当依赖发生变化时，Effect才会被触发！
     *      通常会将Effect中使用的所有的局部变量都设置为依赖项
     *          这样一来可以确保这些值发生变化时，可以触发Effect的执行
     *      像setState()是由钩子函数useState()生成的，
     *          useState()会确保组件的每次重新渲染都会获取到相同的setState()对象
     *          所以setState()可以不设置到依赖中
     *      如果设置了一个空数组，则意味着Effect只会在组件初始化的时候渲染一次
     */
    useEffect(() => {
        // console.log('effect执行了！')

        if (cartCtx.totalAmount === 0) {
            // 购物车已经被清空
            setShowDetails(false)
            setShowCheckout(false)
        }
    }, [cartCtx.totalAmount])

    /*useEffect(() => {
        console.log('effect执行了！')

        if (cartCtx.totalAmount === 0) {
            // 购物车已经被清空
            setShowDetails(false)
            setShowCheckout(false)
        }
    }, [cartCtx, setShowDetails, setShowCheckout])*/

    /*useEffect(() => {
        console.log('effect执行了！')

        if (cartCtx.totalAmount === 0) {
            // 购物车已经被清空
            setShowDetails(false)
            setShowCheckout(false)
        }
    }, [])*/

    // 添加一个显示详情页的函数
    const toggleDetailsHandler = () => {
        if (cartCtx.totalAmount === 0) {
            setShowDetails(false)
            return
        }
        setShowDetails(prevState => !prevState)
    }

    const showCheckoutHandler = () => {
        if (cartCtx.totalAmount === 0) return
        setShowCheckout(true)
    }

    const hideCheckoutHandler = () => {
        setShowCheckout(false)
    }

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>

            {
                showCheckout && <Checkout onHide={hideCheckoutHandler} />
            }

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
            <button onClick={showCheckoutHandler}
                    className={`${classes.Button} ${cartCtx.totalAmount === 0 ? classes.Disabled : ''}`}
            >
                去结算
            </button>
        </div>
    )
}

export default Cart