import { SyntheticEvent } from "react";

export const VIDEO_URL = "/video.mp4";

export const APP_VIEW = {
  movieList: "MOVIE_LIST",
  movieIntro: "MOVIEW_INTRO",
  movieReservation: "MOVIE_RESERVATION",
  movieGrade: "MOVIE_GRADE",
} as const;

export const POINT_COLOR = "#C40062"


export const POSTER_IMAGE_URL = [
  {
    url:
      "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
  },
  {
    url:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
  },
  {
    url:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
  },

  {
    url:
      "https://upload.wikimedia.org/wikipedia/ko/b/bc/%EB%B0%B1%EB%91%90%EC%82%B0_%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
  },
  {
    url:
      "https://thumb.mtstarnews.com/06/2023/08/2023080209420647066_1.jpg/dims/optimize"
  },
  {
    url:
      "https://image.ytn.co.kr/general/jpg/2021/0621/202106210910040497_d.jpg"
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/ko/3/35/%ED%9E%88%EB%A7%90%EB%9D%BC%EC%95%BC_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
  },
  {
    url:
      "https://cdn.e-fastnews.com/news/photo/202203/1476_1488_226.jpg"
  },
];

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