import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/productsApp/products/productsSlice'
import counterReducer from '../features/counter/counterSlice'
import cartReducer from '../features/productsApp/cart/cartSlice'
import authReducer from "../features/auth/authSlice";
import { usersApi } from "../features/users/usersApi";
import { weatherApi } from "../features/weather/weatherApi";



//→ Импортируем configureStore — простой способ создать store.
export const store = configureStore({
    reducer: {
        products: productsReducer,
        counter: counterReducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        cart: cartReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware, usersApi.middleware),
})

// Типы для useSelector и useDispatch

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// → Создаём типы для селектора и диспатчера, чтобы использовать в TS-компонентах.
