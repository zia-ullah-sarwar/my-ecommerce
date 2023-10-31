"use client";
import Image from "next/image";
import { useState } from "react";
import Nike1 from "@/public/asests/images/nike1.png";
import { FaCartPlus, FaStar, FaRegStar, FaHeart } from "react-icons/fa";
import ProductInformation from "../components/ProductInformation";

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
  const [productQyt, setProductQyt] = useState(1);
  const [fvrt, setFvrt] = useState(false);

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };
  const productQytHandler = () => {
    setProductQyt(productQyt + 1);
  };
  const fvrtClickHandler = () => {
    setFvrt(true);
  };
  return (
    <div>
      <div className="flex flex-row gap-10 mb-20">
        <div>
          <Image src={Nike1} alt="product-img" height={700} width={700}></Image>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center text-3xl text-gray-300 font-bold">
            Nike Air 2023
            <div className="rounded-full bg-gray-600 py-1 px-2 font-semibold text-sm text-green-500">
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
          <div className="text-green-500 font-semibold">$1805.00</div>
          <div>
            <p className="text-gray-300 font-semibold text-md">Decription</p>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              dolor itaque distinctio officia doloremque, sequi libero
              cupiditate a iusto laudantium dignissimos est minima iure fugit
              tempora eius alias quibusdam pariatur.
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
                      className={`border-2 p-1 text-sm w-10 text-center rounded hover:bg-gray-700 ${
                        selectedSkill === item.size
                          ? "bg-gray-300 text-gray-800"
                          : ""
                      }`}
                    >
                      {item.size}
                    </div>
                  );
                })}
              </form>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-row gap-1 items-center">
              <div className="text-gray-300 font-semibold text-md mr-2">
                Qyt
              </div>
              <button className="rounded-s-full px-2 border-2 bg-gray-300 text-gray-900">
                –
              </button>
              <p className="border-2 px-2 rounded-sm">{productQyt}</p>
              <button
                onClick={productQytHandler}
                className="rounded-e-full px-2 border-2 bg-gray-300 text-gray-900"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <p className="text-gray-300 font-semibold">Category :</p>
            <p className="text-gray-300">Shose</p>
          </div>
          <div className="border-[1px] border-gray-600"></div>

          <div className="flex gap-3">
            <button className="rounded-full px-5 py-1 bg-gray-300 w-40">
              <div className="flex items-center gap-3">
                <FaCartPlus className="text-gray-800" />
                <p className="text-gray-800">Add to Cart</p>
              </div>
            </button>

            <button onClick={fvrtClickHandler}>
              <FaHeart
                className={
                  fvrt === true
                    ? "text-red-500 text-2xl"
                    : "text-gray-300 text-2xl"
                }
              />
            </button>
          </div>
        </div>
      </div>
      <ProductInformation />
    </div>
  );
};

export default Product;
