
import type { JSX } from 'react'
import './App.css'
import { ProductsList } from './features/products/ProductsList'
import { Counter } from './features/counter/Counter'
import { UsersList } from './features/users/UsersList'

function App(): JSX.Element{

  return (
    

    <div className="App">
        <ProductsList/>
        <Counter />
        <UsersList />
    </div>
      
 
  )
}

export default App
