import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Vans from "@/public/asests/images/vans.png";
import Nike1 from "@/public/asests/images/nike1.png";
import Nike2 from "@/public/asests/images/nike2.png";
import Nike3 from "@/public/asests/images/nike3.png";

const ProductCarousel = () => {
  const carouselContent = [
    {
      brand: "Nike",
      slogan: "Just do it",
      description:
        "This seasonal Classic Slip-On Checkerboard honors our legendary faceless silhouette while offering a fresh look that boosts the appeal of this easy-to-wear shoe.",
      collection: "Summer",
      image: Nike1,
    },
    {
      brand: "Nike",
      slogan: "Just do it",
      description:
        "This seasonal Classic Slip-On Checkerboard honors our legendary faceless silhouette while offering a fresh look that boosts the appeal of this easy-to-wear shoe.",
      collection: "Summer",
      image: Vans,
    },
    {
      brand: "Nike",
      slogan: "Just do it",
      description:
        "This seasonal Classic Slip-On Checkerboard honors our legendary faceless silhouette while offering a fresh look that boosts the appeal of this easy-to-wear shoe.",
      collection: "Summer",
      image: Nike2,
    },
    {
      brand: "Nike",
      slogan: "Just do it",
      description:
        "This seasonal Classic Slip-On Checkerboard honors our legendary faceless silhouette while offering a fresh look that boosts the appeal of this easy-to-wear shoe.",
      collection: "Summer",
      image: Nike3,
    },
  ];
  return (
    <div className="bg-white">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        {carouselContent.map((item, index) => {
          return (
            <div className="flex flex-row items-start justify-evenly m-10">
              <div className="text-start">
                <p className="text-black text-[48px] font-bold">{item.brand}</p>
                <p className="text-black text-[28px] ">{item.slogan}</p>
                <p className="text-black text-[16px] w-96">
                  {item.description}
                </p>
                <p className="text-black font-bold text-[14px] my-5">
                  Now $65.00
                </p>
                <button className="rounded-lg bg-black text-gray-300 py-2 px-5">
                  Shop now
                </button>
              </div>
              <div>
                <Image
                  src={item.image}
                  height={300}
                  width={250}
                  alt="carousel-img"
                ></Image>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
