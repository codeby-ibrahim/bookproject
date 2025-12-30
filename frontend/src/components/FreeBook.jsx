import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/books");

        const data = res.data.filter(
          (item) => item.category === "Free"
        );

        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="font-semibold text-xl pb-2">
        Free Offered Courses
      </h1>

      <Slider {...settings}>
        {book.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
