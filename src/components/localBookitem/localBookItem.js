import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

function BookitemLocal(props) {
  return (
    <div className="flex flex-col w-full rounded-md shadow-md hover:border border-[#fffad6] transition hover:scale-105 duration-200">
      {/* Image container */}
      <div className="w-full h-48 relative group overflow-hidden">
        <img
          src={props.image}
          className=" w-full h-full object-cover rounded-t-md"
          alt={props.title}
        />
        <h4 class="absolute bottom-2 md:bottom-8 md:px-10 text-white uppercase duration-200 w-full p-4">
          {props.title}
        </h4>
        {/*  */}

        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-800 group-hover:from-gray-800 group-hover:to-gray-950 group-hover:opacity-70"></div>
      </div>
      {/* Content Container */}
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h4 className="text-2xl capitalize text-[#1d3557] mb-2">
            {props.title}
          </h4>
          <p className="text-sm font-thin text-pretty">{props.description}</p>
        </div>
        <Link to={`book/${props.id}`}>
          <div className="text-[#1d3557] hover:text-[#e63946] mt-2">
            <span>Read more</span>
            <IoArrowForward className="cursor-pointer inline ml-1" />
          </div>
        </Link>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between p-4 bg-[#f1faee] border-t border-[#f1faee] text-xs capitalize">
        <span>Writer: {props.writer}</span>
        {/* <span>
          <BiTimeFive className="inline mr-1" title="time" />
          {props.readingTime} minutes
        </span> */}
      </div>
    </div>
  );
}

export default BookitemLocal;
