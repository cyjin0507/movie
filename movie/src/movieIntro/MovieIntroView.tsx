import styled from "styled-components";
import MovieInfo from "./components/MovieInfo";
import MovieIntroVideoBox from "./components/MovieIntroVideoBox";

export default function MovieIntroView() {

    return <MovieIntroContainer>
        <MovieIntroVideoBox />
        <MovieInfo />
    </MovieIntroContainer>
}

const MovieIntroContainer = styled.div`
    width: 1200px;
    margin: auto;
    margin-top: 60px;
`