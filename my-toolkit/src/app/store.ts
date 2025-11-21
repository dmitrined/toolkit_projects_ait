import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/productsSlice'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'



//→ Импортируем configureStore — простой способ создать store.
export const store = configureStore({
    reducer: {
        products: productsReducer,
        counter: counterReducer,
        users: usersReducer

    }
})

// Типы для useSelector и useDispatch

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// → Создаём типы для селектора и диспатчера, чтобы использовать в TS-компонентах.
