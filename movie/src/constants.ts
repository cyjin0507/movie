import { SyntheticEvent } from "react";

export const VIDEO_URL = "/video.mp4";

export const APP_VIEW = {
  movieList: "MOVIE_LIST",
  movieIntro: "MOVIEW_INTRO",
  movieReservation: "MOVIE_RESERVATION",
  movieGrade: "MOVIE_GRADE",
} as const;


export const ENTER_KEY = 13;

export const responsive = {
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

export const addDefaultImg = (e : SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = "https://via.placeholder.com/150x212.jpg";
}

export const GENRE_LIST = ["드라마", "코메디", "액션", "공포", "지역", "문화"];
