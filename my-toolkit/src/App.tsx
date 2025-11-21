
import type { JSX } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LayOut from './navbar/LayOut'
import { ProductsList } from './features/products/ProductsList'
import { UsersList } from './features/users/UsersList'
import { Counter } from './features/counter/Counter'


export default function App():JSX.Element {
  

  return (
    <Routes>
      <Route path ="/" element = {<LayOut />}>
      <Route index element = {<ProductsList />} />
      <Route path="productsList" element = {<ProductsList />} />
      <Route path="usersList" element = {<UsersList />} />
      <Route path="counter" element = {<Counter />} />
      </Route>
    </Routes>
  )
}

 
