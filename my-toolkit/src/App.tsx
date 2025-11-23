
import type { JSX } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LayOut from './navbar/LayOut'
import { UsersList } from './features/users/UsersList'
import { Counter } from './features/counter/Counter'
import AppProducts from './features/productsApp/AppProducts'


export default function App():JSX.Element {
  

  return (
    <Routes>
      <Route path ="/" element = {<LayOut />}>
      <Route index element = {<UsersList />} />
      <Route path="productsList" element = {<AppProducts />} />
      <Route path="usersList" element = {<UsersList />} />
      <Route path="counter" element = {<Counter />} />
      </Route>
    </Routes>
  )
}

 
