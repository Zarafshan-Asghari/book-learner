import React from "react";
import defImg from "../Hero/hero.jpg";
const BookItem = ({ title, authors, imageLinks = { defImg }, infoLink }) => {
  return (
    <a
      href={infoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-xs p-2 rounded-md overflow-hidden shadow-lg m-2 bg-white flex flex-col transform transition duration-300 hover:scale-105"
    >
      {imageLinks && imageLinks.thumbnail ? (
        <img
          className="w-full h-48 object-cover"
          src={imageLinks.thumbnail}
          alt={title}
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}
      <div className=" flex flex-col flex-grow">
        <div className="font-bold text-lg text-center mb-2 text-[#1d3557] p-4">
          {title}
        </div>
        <p className="text-[#fff] text-xs flex-grow text-center bg-[#1d3557] p-4">
          {authors && authors.join(", ")}
        </p>
      </div>
    </a>
  );
};

export default BookItem;
