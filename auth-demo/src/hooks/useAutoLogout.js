import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "./store/reducer/authSlice";

const useAutoLogout = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    // 创建一个useEffect(),用来处理登陆的状态
    useEffect(() => {
        const timeout = auth.expirationTime - Date.now()

        if (timeout < 60000) {
            dispatch(logout())
            return;
        }

        const timer = setTimeout(() => {
            dispatch(logout())
        }, timeout);

        return () => {
            clearTimeout(timer) // 在下一次执行之前关闭定时器,避免开启多个
        }
    }, [auth, dispatch])
}

export default useAutoLogout