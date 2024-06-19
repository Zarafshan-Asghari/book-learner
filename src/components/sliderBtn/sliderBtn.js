import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

export default function SliderButton() {
  const swiper = useSwiper();
  return (
    <div className="flex gap-6 items-center">
      <IoIosArrowBack
        onClick={() => swiper.slidePrev()}
        className="w-10 h-10 text-2xl font-bold text-[#e63946] border-2 border-[#e63946] p-2 rounded-full hover:text-white hover:bg-[#e63946] transition duration-500 cursor-pointer"
      />
      <IoIosArrowForward
        onClick={() => swiper.slideNext()}
        className="w-10 h-10 text-2xl font-bold text-[#e63946] border-2 border-[#e63946] p-2 rounded-full hover:text-white hover:bg-[#e63946] transition duration-500 cursor-pointer"
      />
    </div>
  );
}
