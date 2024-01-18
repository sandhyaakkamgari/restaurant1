import React, { useContext } from "react";
import { ShoppingCart } from "heroicons-react";
import { useSelector } from "react-redux";
import { CartContext } from "../../context/CartCotext";

const Navbar = () => {
  const data = useSelector((state) => state.menuItem);
  const { menuList } = data;
  const { cartCount } = useContext(CartContext);
  return (
    <nav>
      <div
        className="navbar w-full flex bg-white justify-between h-13 pt-3"
        style={{ boxShadow: "5px" }}
      >
        {menuList?.map((item, index) => {
          return (
            <div key={index}>
              <h1
                className="my-3 font-medium mx-3 text-zinc-600"
                style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
              >
                {" "}
                {item?.restaurant_name}
              </h1>
            </div>
          );
        })}
        <div className="flex my-3">
          <h3 className="text-zinc-600 mx-5">My Orders</h3>
          <ShoppingCart className="text-zinc-400 " />
          <span className="bg-red-600 text-white rounded-full h-6 text-center w-6 mr-5">
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
