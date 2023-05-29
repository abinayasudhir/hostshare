import { useState } from "react";
import { useParams } from "react-router-dom";
import { getSpecificLocationDetails } from "../../helpers/utils";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const Carousel = () => {
  let { id } = useParams();

  const data = getSpecificLocationDetails(id || "")?.info?.images?.data || [];

  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mx-auto bg-black px-10">
      <button
        onClick={() => navigate(-1)}
        className="z-10 flex items-center gap-1 hover:bg-gray-300 hover:bg-opacity-50 absolute top-20 left-15 border-gray-200 border-2 px-2 py-1 rounded-lg focus:outline-none"
      >
        <AiFillCloseCircle color="white" />{" "}
        <span className="text-white">Close</span>
      </button>
      <div className="absolute top-20 right-2/4 text-white font-bold">
        {currentIndex + 1}/{data.length}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 hover:text-gray-800 hover:bg-gray-300 px-3 py-2 rounded-full focus:outline-none z-10"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 hover:text-gray-800 hover:bg-gray-300 px-3 py-2 rounded-full focus:outline-none z-10"
      >
        &gt;
      </button>
      <div className="relative h-screen">
        <div className="relative w-full h-4/6">
          <div
            className="h-full w-full absolute top-0 left-0 translate-y-1/4 translate-x-1 opacity-1 transition-opacity duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${data[currentIndex]?.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
