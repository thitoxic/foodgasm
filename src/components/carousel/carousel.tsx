"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './carousel.css'

import burgerImg from "@/components/carousel/images/burger.jpg";
import curryImg from "@/components/carousel/images/curry.jpg";
import dumplingsImg from "@/components/carousel/images/dumplings.jpg";
import macncheeseImg from "@/components/carousel/images/macncheese.jpg";
import pizzaImg from "@/components/carousel/images/pizza.jpg";
import schnitzelImg from "@/components/carousel/images/schnitzel.jpg";
import tomatoSaladImg from "@/components/carousel/images/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function CarouselSection() {
  return (
    <div className="flex justify-center"> 
        <Carousel className="carousel-container" autoPlay={true} infiniteLoop={true}  showStatus={false} showIndicators={false} showThumbs={false}>
        {images.map((image, index) => (
          <Image key={index} src={image.image} className={""} alt={image.alt} />
        ))}
    </Carousel>
      </div>
  );
}
