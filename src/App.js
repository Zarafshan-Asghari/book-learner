// import { BsInstagram } from "react-icons/bs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Books from "./pages/books/books";
import Article from "./pages/article/article";
import AddArticle from "./pages/addArticle/AddArticle";
import EditArticle from "./pages/editArticle/editArticle";
import Articles from "./components/allArticles/articles";
function App() {
  return (
    <>
      {/* routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/article" element={<Article />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/add-article" element={<AddArticle />} />

          <Route path="/article/:articleId" element={<Article />} />
          <Route path="/edit-article/:articleId" element={<EditArticle />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
