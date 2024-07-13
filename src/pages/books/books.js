import Navbar from "../../components/navbar/navbar";
import React, { useState } from "react";
import axios from "axios";
import BookCard from "../../components/onlineBooks/onlineBook";
import LocalBookSearch from "../../components/allLocalBooks/book";

function Books() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const searchBook = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAGVUst0LMCMicsv9eQCArt_1UzX6rdx7Y`
      )
      .then((resp) => {
        setBooks(resp.data.items.slice(0, 3));
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <>
      <Navbar />
      <form
        className="w-full max-w-md md:max-w-lg mx-auto my-4"
        onSubmit={searchBook}
      >
        <div className="flex items-center border-b border-[#1d3557] py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search for books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchBook(e);
              }
            }}
          />
          <button
            className="flex-shrink-0 bg-[#1d3557] hover:bg-[#213d63] border-[#1d3557] hover:border-[#284266] text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-4 md:flex-row flex-wrap items-center justify-center">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {/* LocalBookSearch => component used here */}
      <LocalBookSearch></LocalBookSearch>
    </>
  );
}

export default Books;
