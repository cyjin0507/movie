import { movieListResult } from "../../types"
import { responsive } from "../../constants";
import MovieItem from "./MovieItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";


export default function MovieList(
    {
        movieListData,
    }: {
        movieListData: movieListResult[];
    }
) {


    return (
        <MovieListContainer className="parent">
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
                        return <MovieItem movieInfo={movieItem} key={index} rank={index+1} />
                    })
                }
            </Carousel>
        </MovieListContainer>
    )
}

const MovieListContainer = styled.div`
    margin-top: 30px;
`