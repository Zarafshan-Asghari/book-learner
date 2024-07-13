import Navbar from "../navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import BookitemLocal from "../localBookitem/localBookItem";
import { BiSearch } from "react-icons/bi";
import BookItem from "../bookItem/bookItem";

export default function LocalBookSearch() {
  const [localBooks, setLocalBooks] = useState([]);

  // Request for books from Google Books API
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:programming&english&novelkey=AIzaSyAGVUst0LMCMicsv9eQCArt_1UzX6rdx7Y`
      )
      .then((response) => setLocalBooks(response.data.items.slice(0, 10))) // Limit to 10 books for the slider
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <>
      <div className="py-10 px-4 max-w-2xl md:max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 p-6">
            {localBooks.map((book) => (
              <BookItem
                key={book.volumeInfo.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                imageLinks={book.volumeInfo.imageLinks}
                infoLink={book.volumeInfo.infoLink}
              />
            ))}
          </div>
          {/* alert when searching was not found */}
          {localBooks.length === 0 && (
            <div className="flex items-center justify-center">
              {" "}
              <p className="capitalize text-xl text-[#e63946] text-center border border-[#e63946]  p-2 rounded-lg max-w-sm">
                Not found !
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
