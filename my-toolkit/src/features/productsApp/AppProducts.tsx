import { useState, type JSX } from "react";
import Products from "./products/Products";
import CartIcon from "./CartIcon/CartIcon";
import Cart from "./cart/Cart";

export default function AppProducts(): JSX.Element{
    const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <Products />
<CartIcon onClick={() => setShowCart((prev) =>!prev)}/>
{showCart && <Cart />}
    </div>
  )
}
