import React from "react";
import CartButton from "../Cart/CartButton";

const CategoryDishes = (props) => {
  // console.log(props);

  return (
    <article className="w-full">
      {/* {console.log("dd",dishes)} */}

      {props.dishes === undefined
        ? ""
        : props.dishes.map((item, index) => {
            return (
              <div className="cart_box container mx-auto" key={index}>
                <div>
                  <h1
                    className=" text-zinc-600 shadow-sm font-serif text-2xl "
                    style={{ color: "black" }}
                  >
                    {item?.dish_name}
                  </h1>
                  <h3 className="text-zinc-600  font-serif text-md">
                    {item?.dish_currency}
                    {""} {item?.dish_price}
                  </h3>
                  <h4
                    className="text-zinc-500 font-sans"
                    style={{ color: "grey" }}
                  >
                    {item?.dish_description}
                  </h4>
                  {item.dish_Availability ? (
                    <CartButton item={item} cartCount={props.setCart} />
                  ) : (
                    <h4 className="text-red-600 mt-3 font-serif my-3">
                      Not Available
                    </h4>
                  )}
                </div>
                <div className="flex ">
                  <h3
                    className="text-zinc-500 font-medium mx-5 text-center  justify-end"
                    style={{ color: "orange" }}
                  >
                    {item?.dish_calories} Calories
                  </h3>
                  <div className="cart_img justify-end object-cover ">
                    <img src={item?.dish_image} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
    </article>
  );
};

export default CategoryDishes;
