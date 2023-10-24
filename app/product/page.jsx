"use client";
import Image from "next/image";
import { useState } from "react";
import Nike1 from "@/public/asests/images/nike1.png";
import { FaCartPlus, FaStar, FaRegStar, FaHeart } from "react-icons/fa";

const Product = () => {
  const productSize = [
    {
      size: "sm",
      sizeName: "small",
    },
    {
      size: "md",
      sizeName: "medium",
    },
    {
      size: "lg",
      sizeName: "large",
    },
    {
      size: "xl",
      sizeName: "extraLarge",
    },
  ];
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [productQyt, setProductQyt] = useState("1");

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };
  const productQytHandler = (e) => {
    if (productQyt === "+") {
      setProductQyt(productQyt + 1);
    }
  };

  return (
    <div className="flex flex-row gap-10">
      <div>
        <Image src={Nike1} alt="product-img" height={600} width={600}></Image>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center text-3xl text-gray-300 font-bold">
          Nike Air 2023
          <div className="rounded-full bg-gray-600 px-1 font-light text-sm text-yellow-300">
            Sale
          </div>
        </div>
        <div className="flex gap-1">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaRegStar className="text-gray-300" />
        </div>
        <div className="text-gray-300 font-semibold">$1805.00</div>
        <div>
          <p className="text-gray-300 font-semibold text-md">Decription</p>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            dolor itaque distinctio officia doloremque, sequi libero cupiditate
            a iusto laudantium dignissimos est minima iure fugit tempora eius
            alias quibusdam pariatur.
          </p>
        </div>
        <div className="border-[1px] border-gray-600"></div>
        <p className="text-gray-300 font-semibold text-md">Size</p>
        <div>
          <div className="flex flex-row items-center">
            <form className="flex gap-2">
              {productSize.map((item, index) => {
                return (
                  <div
                    onClick={handleSkillChange}
                    className={`border-2 p-2 text-sm rounded hover:bg-gray-700 ${
                      selectedSkill === item.size
                        ? "bg-gray-300 text-gray-800"
                        : ""
                    }`}
                  >
                    {item.size}
                  </div>
                  // <div key={index}>
                  //   <input
                  //     type="radio"
                  //     id={item.sizeName}
                  //     value={item.size}
                  //     className="hidden"
                  //     onChange={handleSkillChange}
                  //     checked={selectedSkill === item.size}
                  //   />
                  //   <label
                  //     htmlFor={item.sizeName}
                  //     className={`border-2 p-2 text-sm rounded hover:bg-gray-700 ${
                  //       selectedSkill === item.size
                  //         ? "bg-gray-300 text-gray-800"
                  //         : ""
                  //     }`}
                  //   >
                  //     {item.size}
                  //   </label>
                  // </div>
                );
              })}
            </form>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-row gap-1">
            <button className="rounded-s-full px-2 bg-gray-300 text-gray-900">
              –
            </button>
            <p className="border-2 px-2 rounded-sm">1</p>
            <button
              onClick={productQytHandler}
              className="rounded-e-full px-2  bg-gray-300 text-gray-900"
            >
              +
            </button>
          </div>
          <button className="rounded-full px-2 py-1  bg-gray-300">
            <div className="flex items-center gap-3">
              <FaCartPlus className="text-gray-800" />
              <p className="text-gray-800">Add to Cart</p>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-gray-300 font-semibold">Category :</p>
          <p className="text-gray-300">Shose</p>
          <button className="text-gray-800 rounded-full px-2 py-1 bg-gray-300 flex items-center gap-2">
            <FaHeart className="text-red-600" /> Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
