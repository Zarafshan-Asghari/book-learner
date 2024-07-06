import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HeroSection from "../../components/Hero/hero";
import BookitemLocal from "../../components/localBookitem/localBookItem";
import BookItem from "../../components/bookItem/bookItem";
import SliderButton from "../../components/sliderBtn/sliderBtn";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { FreeMode, Autoplay } from "swiper/modules";

function Home() {
  const [localBooks, setLocalBooks] = useState([]);
  const [books, setBooks] = useState([]);

  // Request for articles
  useEffect(() => {
    axios
      .get(`http://localhost:3000/books`)
      .then((response) => setLocalBooks(response.data[0]))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  // Request for books from Google Books API
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:motivation&positive&key=AIzaSyAGVUst0LMCMicsv9eQCArt_1UzX6rdx7Y`
      )
      .then((response) => setBooks(response.data.items.slice(0, 10))) // Limit to 10 books for the slider
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* Books section */}
      <section className="max-w-6xl mx-auto py-20 px-8 lg:px-6">
        <h2 className="capitalize text-3xl font-bold mb-12">Books</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {/* Cards */}
          {books &&
            books.map((book) => (
              <SwiperSlide
                key={book.id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <BookItem
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  imageLinks={book.volumeInfo.imageLinks}
                  infoLink={book.volumeInfo.infoLink}
                />
              </SwiperSlide>
            ))}

          {/* Slider buttons */}
          <div className="flex items-center justify-center mt-8 ma-w-sm">
            <SliderButton />
          </div>
        </Swiper>
      </section>
      {/* Article section */}
      <section className="max-w-6xl mx-auto py-20 px-8 lg:px-6">
        <h2 className="capitalize text-3xl font-bold mb-12">recent books</h2>

        {/* Slider */}
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {localBooks &&
            localBooks.map((book) => (
              <SwiperSlide
                key={book.id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <BookitemLocal {...book} />
              </SwiperSlide>
            ))}

          {/* Slider buttons */}
          <div className="flex items-center justify-center mt-10 ma-w-sm">
            <SliderButton />
          </div>
        </Swiper>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
