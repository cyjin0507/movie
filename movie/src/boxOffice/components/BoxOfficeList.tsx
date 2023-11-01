import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { boxOffice, boxOfficeResult, dailyBoxOfficeItem } from "../../types";
import { POSTER_IMAGE_URL } from "../../constants";
import MovieItem from "./MovieItem";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function BoxOfficeList(
    {
        boxOfficeData,
    } : {
        boxOfficeData : dailyBoxOfficeItem[]
    }
) {
    console.log(boxOfficeData);
    

  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {boxOfficeData.map((movieInfo, index) => {
          return <MovieItem movieInfo={movieInfo} key={index} />
        })}
      </Carousel>
    </div>
  );
};