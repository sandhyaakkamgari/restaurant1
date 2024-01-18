import { createContext, useState } from "react";
export const CartContext = createContext(0);

function Cart({ children }) {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
}
export default Cart;
