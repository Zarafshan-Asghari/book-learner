import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Swal from "sweetalert2";

function Article() {
  const { articleId } = useParams(); // Destructure articleId from useParams
  const [articleData, setArticleData] = useState([]);

  const navigate = useNavigate();

  // delete article function
  const deletArticle = (id) => {
    // alert befor deleting
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
        });
        // requst to delete
        axios.delete(`http://localhost:3000/books/?id=${articleId}`);
        navigate("/");
      }
    });
  };
  // TODO
  useEffect(() => {
    axios
      .get(`hhttp://localhost:3000/books/?id=${articleId}`)
      .then((resp) => {
        setArticleData(resp.data.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  }, [articleId]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto py-20 px-6">
        {/* card */}
        <div className="flex-2 flex-col space-y-2 rounded-lg max-w-md bg-gray-100 border-2 border-blue-200">
          <img src={articleData.image} alt={articleData.title} />
          {/*  */}
          <div className="flex flex-col gap-1 p-4">
            <h2 className="text-xl capitalize font-bold text-blue-600">
              {articleData.title}
            </h2>
            {/* */}
            <p>Writer: {articleData.writter}</p>
            <p>Time: {articleData.time}</p>
            <p>Category: {articleData.category}</p>
          </div>
          <div className="flex items-center gap-4 p-6">
            <button
              onClick={() => deletArticle(articleId)}
              className="text-red-600 hover:bg-red-100 capitalize font-semibold p-2 rounded-lg border border-red-600 text-sm"
            >
              Delete article
            </button>
            <Link to={`/edit-article/${articleId}`}>
              <button className="text-[#1d3557]  hover:bg-blue-100 capitalize font-semibold p-2 rounded-lg border border-blue-600 text-sm">
                Edit article
              </button>
            </Link>
          </div>
        </div>

        {/* information */}
        <div className="flex-10 flex-col gap-2 p-4 max-w-lg">
          <p>{articleData.description}</p>
          <p>{articleData.description}</p>
        </div>
      </div>
    </>
  );
}

export default Article;
