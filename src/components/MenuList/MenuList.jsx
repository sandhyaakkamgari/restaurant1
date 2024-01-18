import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuItemsAction } from "../../redux/slices/menuSlices";
import CategoryDishes from "../CategoryDishes/CategoryDishes";

const MenuList = () => {
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          focusOnSelect: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          focusOnSelect: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          focusOnSelect: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const categoryList = useSelector((state) => state.menuItem);
  const { menuList } = categoryList;
  const [dishes, setDishes] = useState(
    menuList[0]?.table_menu_list[0]?.category_dishes
  );

  const handleClick = (cat, dishes) => {
    //alert(cat)
    console.log(dishes);
    setDishes(dishes);
  };
  useEffect(() => {
    dispatch(fetchMenuItemsAction());
  }, [dispatch]);
  //console.log(categoryList);
  return (
    <div className=" w-full shadow-lg h-10 ">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-5  "
        style={{ color: "red", fontSize: "20px", fontWeight: "500" }}
      >
        <Slider {...settings}>
          {menuList[0]?.table_menu_list?.map((item, index) => {
            return (
              <div key={index}>
                <h3
                  onClick={() =>
                    handleClick(item.menu_category, item.category_dishes)
                  }
                >
                  {item?.menu_category}
                </h3>
              </div>
            );
          })}
        </Slider>
        <CategoryDishes
          dishes={
            dishes ? dishes : menuList[0]?.table_menu_list[0]?.category_dishes
          }
        />
      </div>
    </div>
  );
};

export default MenuList;
