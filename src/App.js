// import { BsInstagram } from "react-icons/bs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Books from "./pages/books/books";
// import LocalBookDescription from "./components/localBookitem/localBookItem";
import LocalBookDescription from "./pages/local-book-description/local-book-description";
import Addbook from "./pages/addbook/addbook";
import EditArticle from "./pages/editArticle/editArticle";
// import Articles from "./components/allLocalBooks/book";
import LocalBookSearch from "./components/allLocalBooks/book";
function App() {
  return (
    <>
      {/* routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-books" element={<Books />} />
          <Route path="/book/:bookId" element={<LocalBookDescription />} />
          <Route path="/add-book" element={<Addbook />} />
          <Route path="/edit-books/:bookId" element={<EditArticle />} />
          <Route path="/books" element={<Books />} />
          {/* <Route
            path="/local-books/:bookId"
            element={<LocalBookDescription />}
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
