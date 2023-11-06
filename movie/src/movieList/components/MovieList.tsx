import { movieListResult } from "../../types"
import { responsive } from "../../constants";
import MovieItem from "./MovieItem";
import Carousel from "react-multi-carousel";

export default function MovieList(
    {
        movieListData,
    }: {
        movieListData: movieListResult[];
    }
) {



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
                {
                    movieListData.map((movieItem, index) => {
                        return <MovieItem movieInfo={movieItem} key={index} />
                    })
                }
            </Carousel>
        </div>
    )
}