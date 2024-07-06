import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Swal from "sweetalert2";

function EditArticle() {
  const { bookId } = useParams();
  const [articleData, setArticleData] = useState({});

  // Fetching article data
  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/?id=${bookId}`)
      .then((response) => setArticleData(response.data[0]));
  }, [bookId]);

  // Handle form submission
  const editArticleFun = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    axios
      .put(`http://localhost:3000/books/?id=${bookId}`, articleData)
      .then((response) => {
        // Handle successful update.
        Swal.fire({
          title: " updated successfully",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.error("Error updating article", error);
        // Handle error, e.g., show an error message
      });
  };

  // Handle input changes
  const setValue = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="py-10 px-4 max-w-2xl md:max-w-4xl mx-auto">
        <form
          className="flex flex-col space-y-2 bg-[#fefae0] p-4 rounded-lg shadow-md hover:shadow-lg transition duration-75"
          onSubmit={editArticleFun}
        >
          {/* title */}
          <span className="flex flex-col space-y-1">
            <label
              htmlFor="title"
              className="text-orange-700 capitalize font-thin"
            >
              Article Title
            </label>
            <input
              value={articleData.title}
              onChange={setValue}
              name="title"
              type="text"
              placeholder="Enter article title"
              className="outline-none py-1 px-2 rounded-lg placeholder:capitalize placeholder:text-sm placeholder:font-thin border border-gray-200"
            />
          </span>
          {/* text */}
          <span className="flex flex-col space-y-1">
            <label
              htmlFor="text"
              className="text-orange-700 capitalize font-thin"
            >
              Article Text
            </label>
            <input
              value={articleData.description}
              onChange={setValue}
              name="description"
              type="text"
              placeholder="Enter article text"
              className="outline-none py-1 px-4 rounded-lg placeholder:capitalize placeholder:text-sm placeholder:font-thin border border-gray-200"
            />
          </span>
          {/* writter */}
          <span className="flex flex-col space-y-1">
            <label
              htmlFor="writter"
              className="text-orange-700 capitalize font-thin"
            >
              Writter
            </label>
            <input
              value={articleData.writter}
              onChange={setValue}
              name="writter"
              type="text"
              placeholder="Writter"
              className="outline-none py-1 px-2 rounded-lg placeholder:capitalize placeholder:text-sm placeholder:font-thin border border-gray-200"
            />
          </span>
          {/* subject */}
          <span className="flex flex-col space-y-1">
            <label
              htmlFor="catagory"
              className="text-orange-700 capitalize font-thin"
            >
              Article Catagory
            </label>
            <input
              value={articleData.category}
              onChange={setValue}
              name="category"
              type="text"
              placeholder="Enter article catagory"
              className="outline-none py-1 px-2 rounded-lg placeholder:capitalize placeholder:text-sm placeholder:font-thin border border-gray-200"
            />
          </span>
          {/* image */}
          <span className="flex flex-col space-y-1">
            <label
              htmlFor="image"
              className="text-orange-700 capitalize font-thin"
            >
              Article Image
            </label>
            <input
              value={articleData.image}
              onChange={setValue}
              name="image"
              type="url"
              placeholder="Enter article image"
              className="outline-none py-1 px-2 rounded-lg placeholder:capitalize placeholder:text-sm placeholder:font-thin border border-gray-200"
            />
          </span>
          {/* time */}
          <span className="flex flex-col space-y-1">
            <label
              htmlFor="time"
              className="text-orange-700 capitalize font-thin"
            >
              Article Time
            </label>
            <input
              value={articleData.time}
              onChange={setValue}
              name="time"
              type="number"
              placeholder="Time to study"
              className="outline-none py-1 px-2 rounded-lg placeholder:capitalize placeholder:text-sm placeholder:font-thin border border-gray-200"
            />
          </span>
          <div className="mt-6">
            <button
              type="submit"
              className="px-10 py-2 outline-none bg-[#00ff00] capitalize text-white rounded-lg shadow-lg hover:bg-opacity-75"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditArticle;
