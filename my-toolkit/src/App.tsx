import type { JSX } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LayOut from './navbar/LayOut'
import ProtectedRoute from './navbar/ProtectedRoute/ProtectedRoute'
import UsersList from './features/users/UsersList'
import { Counter } from './features/counter/Counter'
import AppProducts from './features/productsApp/AppProducts'
import Login from './features/auth/Login'
import Home from './features/home/Home'
import Weather from './features/weather/Weather'
import CryptoWallet from './features/cryptoWallet/CryptoWallet'

export default function App(): JSX.Element {

  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />

        <Route path="productsList" element={<ProtectedRoute outlet={<AppProducts />} />} />
        <Route path="usersList" element={<ProtectedRoute outlet={<UsersList />} />} />
        <Route path="counter" element={<ProtectedRoute outlet={<Counter />} />} />
        <Route path="weatherApp" element={<ProtectedRoute outlet={<Weather />} />} />
        <Route path="cryptoWallet" element={<ProtectedRoute outlet={<CryptoWallet />} />} />



        <Route path="home" element={<Home />} />

      </Route>
    </Routes>
  )
}