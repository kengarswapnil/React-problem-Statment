import React, { createContext, useState } from "react";
import products from "../data";
export const CartProductContext = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  return <CartProductContext.Provider value={{cart,setCart}}>{children}</CartProductContext.Provider>;
};

export default CartContext;
