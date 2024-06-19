import React from "react";

const BookCard = ({ book }) => {
  const { title, authors, imageLinks, infoLink } = book.volumeInfo;

  return (
    <a
      href={infoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="w-64 h-96 rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col no-underline"
    >
      <div className="w-64 h-96 rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col">
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
        <div className="px-6 py-4 flex flex-col flex-grow">
          <div className="font-bold text-xl mb-2 text-[#1d3557]">{title}</div>
          <p className="text-[#e63946] text-base flex-grow">
            {authors && authors.join(", ")}
          </p>
        </div>
      </div>
    </a>
  );
};

export default BookCard;
