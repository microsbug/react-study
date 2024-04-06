import React, { useState } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './CartDetails.module.css'
import CartContext from '../../../store/cart-context'
import Meal from '../../Meals/Meal/Meal'
import Confirm from '../../UI/Confirm/Confirm'

const CartDetails = () => {

    const cartCtx = React.useContext(CartContext)

    // 创建state，控制确认框的显示
    const [showConfirm, setShowConfirm] = useState(false)

    // 添加函数显示确认窗口
    const showConfirmHandler = () => {
        setShowConfirm(true)
    }

    const cancelHandler = (e) => {
        e.stopPropagation()
        setShowConfirm(false)
    }

    const OkHandler = () => {
        // 清空购物车
        // cartCtx.clearCart()
        cartCtx.cartDispatch({type: 'CLEARCART'})
    }

    return (
        <Backdrop>

            {
                showConfirm && <Confirm
                    onCancel={cancelHandler}
                    onOk={OkHandler}
                    confirmText={'确认清空购物车吗？'} />
            }

            <div
                onClick={e => e.stopPropagation()}
                className={classes.CartDetails}
            >
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear} onClick={showConfirmHandler}>
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