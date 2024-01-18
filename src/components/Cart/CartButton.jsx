import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/CartCotext";

const CartButton = (props) => {
  const { setCartCount, cartCount } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleAddToCart = (no, e) => {
    e.preventDefault();

    if (no === -1 && count === 0) {
      //alert("not available")
      setText("");
    } else {
      setCartCount(cartCount + no);
      setCount(count + no);
      setText("Customizations available");
    }
  };
  // console.log(props);

  return (
    <>
      <div className="flex bg-green-700 rounded-full w-32 my-3 ">
        <button
          className=" px-4 text-white"
          onClick={(e) => handleAddToCart(-1, e)}
        >
          -
        </button>
        <div className="text-center text-white pl-5">{count}</div>
        <button
          onClick={(e) => handleAddToCart(1, e)}
          className="mx-5 px-4 text-white"
        >
          +
        </button>
      </div>
      {props.item.dish_Availability ? (
        <h4 className="text-red-600  font-serif my-3">{text}</h4>
      ) : (
        ""
      )}
    </>
  );
};

export default CartButton;
