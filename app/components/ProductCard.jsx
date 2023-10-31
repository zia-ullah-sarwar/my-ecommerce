import React from "react";
import Image from "next/image";
import Nike1 from "@/public/asests/images/nike1.png";
import Nike3 from "@/public/asests/images/nike3.png";
import Nike2 from "@/public/asests/images/nike2.png";
import Vans from "@/public/asests/images/vans.png";
import FilterSideBar from "@/app/components/FilterSideBar";

import { FaStar, FaRegStar, FaCartPlus, FaHeart } from "react-icons/fa";
const ProductCard = () => {
  return (
    <div className="flex gap-7">
      <div>
        <FilterSideBar />
      </div>
      <div class="grid grid-cols-4 gap-7">
        <div className="flex flex-col p-3 rounded-lg gap-2 bg-[#363532] relative">
          <div>
            <Image
              src={Nike3}
              alt="card-img"
              height={400}
              width={400}
              className="h-full w-full"
            ></Image>
            <div className="rounded-full absolute top-[20px] right-[20px] bg-[#363532] py-1 px-2 text-xs text-green-500">
              Sale
            </div>
          </div>
          <p className="text-lg font-semibold">Nike Air 101</p>

          <div className="flex justify-between">
            <p className="text-md text-green-500 font-semibold">$18.5</p>
            <div className="flex gap-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaRegStar className="text-gray-300" />
            </div>
          </div>
          <div className="flex gap-3">
            <button className="rounded-md px-5 py-1 bg-gray-300 w-full">
              <div className="flex justify-center items-center gap-3">
                <p className="text-gray-800">Add to Cart</p>
              </div>
            </button>
            <button>
              <FaHeart className="text-red-500 text-2xl" />
            </button>
          </div>
        </div>
        <div className="flex flex-col p-3 rounded-lg gap-2 bg-[#363532] relative">
          <div>
            <Image
              src={Nike3}
              alt="card-img"
              height={400}
              width={400}
              className="h-full w-full"
            ></Image>
            <div className="rounded-full absolute top-[20px] right-[20px] bg-[#363532] py-1 px-2 text-xs text-green-500">
              Sale
            </div>
          </div>
          <p className="text-lg font-semibold">Nike Air 101</p>

          <div className="flex justify-between">
            <p className="text-md text-green-500 font-semibold">$18.5</p>
            <div className="flex gap-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaRegStar className="text-gray-300" />
            </div>
          </div>
          <div className="flex gap-3">
            <button className="rounded-md px-5 py-1 bg-gray-300 w-full">
              <div className="flex justify-center items-center gap-3">
                <p className="text-gray-800">Add to Cart</p>
              </div>
            </button>
            <button>
              <FaHeart className="text-red-500 text-2xl" />
            </button>
          </div>
        </div>
        <div className="flex flex-col p-3 rounded-lg gap-2 bg-[#363532] relative">
          <div>
            <Image
              src={Nike2}
              alt="card-img"
              height={400}
              width={400}
              className="h-full w-full"
            ></Image>
            <div className="rounded-full absolute top-[20px] right-[20px] bg-[#363532] py-1 px-2 text-xs text-green-500">
              Sale
            </div>
          </div>
          <p className="text-lg font-semibold">Nike Air 101</p>

          <div className="flex justify-between">
            <p className="text-md text-green-500 font-semibold">$18.5</p>
            <div className="flex gap-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaRegStar className="text-gray-300" />
            </div>
          </div>
          <div className="flex gap-3">
            {" "}
            <button className="rounded-md px-5 py-1 bg-gray-300 w-full">
              <div className="flex justify-center items-center gap-3">
                <p className="text-gray-800">Add to Cart</p>
              </div>
            </button>
            <button>
              <FaHeart className="text-red-500 text-2xl" />
            </button>
          </div>
        </div>
        <div className="flex flex-col p-3 rounded-lg gap-2 bg-[#363532] relative">
          <div>
            <Image
              src={Nike1}
              alt="card-img"
              height={400}
              width={400}
              className="h-full w-full"
            ></Image>
            <div className="rounded-full absolute top-[20px] right-[20px] bg-[#363532] py-1 px-2 text-xs text-green-500">
              Sale
            </div>
          </div>
          <p className="text-lg font-semibold">Nike Air 101</p>

          <div className="flex justify-between">
            <p className="text-md text-green-500 font-semibold">$18.5</p>
            <div className="flex gap-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaRegStar className="text-gray-300" />
            </div>
          </div>
          <div className="flex gap-3">
            {" "}
            <button className="rounded-md px-5 py-1 bg-gray-300 w-full">
              <div className="flex justify-center items-center gap-3">
                <p className="text-gray-800">Add to Cart</p>
              </div>
            </button>
            <button>
              <FaHeart className="text-red-500 text-2xl" />
            </button>
          </div>
        </div>
        <div className="flex flex-col p-3 rounded-lg gap-2 bg-[#363532] relative">
          <div>
            <Image
              src={Vans}
              alt="card-img"
              height={400}
              width={400}
              className="h-full w-full"
            ></Image>
            <div className="rounded-full absolute top-[20px] right-[20px] bg-[#363532] py-1 px-2 text-xs text-green-500">
              Sale
            </div>
          </div>
          <p className="text-lg font-semibold">Nike Air 101</p>

          <div className="flex justify-between">
            <p className="text-md text-green-500 font-semibold">$18.5</p>
            <div className="flex gap-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaRegStar className="text-gray-300" />
            </div>
          </div>
          <div className="flex gap-3">
            {" "}
            <button className="rounded-md px-5 py-1 bg-gray-300 w-full">
              <div className="flex justify-center items-center gap-3">
                <p className="text-gray-800">Add to Cart</p>
              </div>
            </button>
            <button>
              <FaHeart className="text-red-500 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
