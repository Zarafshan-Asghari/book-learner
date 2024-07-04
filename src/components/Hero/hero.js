import React from "react";
import Image from "./hero.jpg";
import { FaBook, FaUser } from "react-icons/fa"; //react icon
import { RiArticleLine } from "react-icons/ri"; //react icon
import HeroItem from "../heroItem/heroItem"; //react icon
// aos animations
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  const statistics = [
    { title: "books", icon: <FaBook />, count: 903, duration: 1000 },
    { title: "users", icon: <FaUser />, count: 125, duration: 1500 },
    { title: "articles", icon: <RiArticleLine />, count: 45, duration: 2000 },
  ];
  // aos anitalization
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="bg-[#f1faee] pt-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse gap-12 md:gap-6 md:flex-row items-center justify-between px-8 lg:px-6">
          {/* Content Part */}
          <div className="md:w-1/2 flex flex-col items-center justify-center md:justify-start md:items-start">
            <h2 className="text-3xl md:text-6xl font-bold mb-4">
              <span className="heroItems bg-red-200">Dis</span>cover, Read, and
              Learn
            </h2>
            {/* statistics HeroItems container */}
            <div
              data-aos="fade-right"
              className="grid grid-cols-3 gap-6 md:gap-8 py-6 my-2 justify-center"
            >
              {statistics.map((statistic, index) => (
                <HeroItem key={index} {...statistic} />
              ))}
            </div>

            <button className="px-6 py-3 bg-[#e63946] text-white font-semibold rounded-lg hover:text-[#e63946] hover:border-[#e63946] hover:bg-white transition duration-500 border-2 border-bg-[#e63946]">
              Get Started
            </button>
          </div>

          {/* Image Part */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              data-aos="fade-right"
              src={Image}
              className="heroImg w-full h-auto shadow-lg"
              alt="image"
            />
          </div>
        </div>
      </section>
      {/* svg */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f1faee"
          fillOpacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,106.7C672,96,768,128,864,160C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
