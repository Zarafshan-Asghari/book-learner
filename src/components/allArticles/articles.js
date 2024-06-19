import Navbar from "../navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import ArticleItem from "../../components/articleItem/articleItem";
import { BiSearch } from "react-icons/bi";

// Accordian component definition
const Accordion = ({ selectedOption, handleOptionChange }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center md:items-start flex-col ">
      <div className="accordion-item bg-white shadow-md mb-4 w-[360px]">
        <button
          className="accordion-header w-full text-left p-4    bg-red-50 rounded-lg text-[#e63946] font-semibold focus:outline-none"
          onClick={() => handleAccordionClick(0)}
        >
          sort
        </button>
        <div
          className={`flex flex-col overflow-hidden transition-max-height duration-300 px-4 bg-white text-[#e63946] ${
            activeIndex === 0 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-[#e63946]"
              name="option"
              value="recommend"
              checked={selectedOption === "recommend"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">recommend</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-[#e63946]"
              name="option"
              value="recent"
              checked={selectedOption === "recent"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">recent article</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-[#e63946]"
              name="option"
              value="longest"
              checked={selectedOption === "longest"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">long article</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-[#e63946]"
              name="option"
              value="shortest"
              checked={selectedOption === "shortest"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">short articles</span>
          </label>
        </div>
      </div>
      <div className="accordion-item bg-white shadow-md mb-4 w-[360px]">
        <button
          className="accordion-header w-full text-left p-4  bg-red-50 rounded-xl text-[#e63946] font-semibold focus:outline-none"
          onClick={() => handleAccordionClick(1)}
        >
          category
        </button>
        <div
          className={`accordion-body overflow-hidden transition-max-height duration-300 bg-white px-4 text-[#e63946] ${
            activeIndex === 1 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-[#e63946]"
              name="option"
              value="sport"
              checked={selectedOption === "sport"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">sport</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default function Articles() {
  const [articles, setArticle] = useState([]);
  const [selectedOption, setSelectedOption] = useState("recommend");
  const [searchKey, setSearchKey] = useState("");

  const searchArticle = (e) => {
    setSearchKey(e.target.value);
  };

  const searchBtn = () => {
    axios
      .get(
        `http://localhost/react/api/articles/?search=${searchKey}&column=title`
      )
      .then((response) => setArticle(response.data.data));
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if (selectedOption === "recent") {
      getArticleByOrder("desc", "id");
    } else if (selectedOption === "recommend") {
      getArticleByOrder("asc", "id");
    } else if (selectedOption === "longest") {
      getArticleByOrder("desc", "readingTime");
    } else if (selectedOption === "shortest") {
      getArticleByOrder("asc", "readingTime");
    }
  }, [selectedOption]);

  const getArticleByOrder = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/articles/?order=${order}&column=${column}`
      )
      .then((response) => setArticle(response.data.data));
  };

  return (
    <>
      <Navbar />
      <div className="py-10 px-4 max-w-2xl md:max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between flex-col md:flex-row items-center gap-6">
            <h3 className="capitalize text-2xl">all articles</h3>
            <span className="flex rounded-lg    bg-red-50">
              <button onClick={searchBtn} className=" p-2">
                <BiSearch className="hover:text-gray-300 transition duration-150" />
              </button>
              <input
                onChange={searchArticle}
                type="text"
                className=" rounded-r-lg outline-none focus:outline-none border-2 border-red-50   p-2"
              />
            </span>
          </div>
          <Accordion
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 p-6">
            {articles.map((article) => (
              <ArticleItem key={article.id} {...article} />
            ))}
          </div>
          {/* alert when searching was not found */}
          {articles.length == 0 && (
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
