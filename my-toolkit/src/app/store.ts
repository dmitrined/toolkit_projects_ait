import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/productsApp/products/productsSlice'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'
import cartReducer from '../features/productsApp/cart/cartSlice'
import authReducer from "../features/auth/authSlice";



//→ Импортируем configureStore — простой способ создать store.
export const store = configureStore({
    reducer: {
        products: productsReducer,
        counter: counterReducer,
        users: usersReducer,
        cart: cartReducer,
        auth: authReducer

    }
})

// Типы для useSelector и useDispatch

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// → Создаём типы для селектора и диспатчера, чтобы использовать в TS-компонентах.
