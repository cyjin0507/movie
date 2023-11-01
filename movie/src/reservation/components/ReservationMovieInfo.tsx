import { useRecoilValue, useSetRecoilState } from "recoil";
import { appViewAtom, selectedMovieInfo } from "../../util/recoils/utilRecoil";
import styled from "styled-components";
import { APP_VIEW, POSTER_IMAGE_URL } from "../../constants";
import MakeReservation from "./MakeReservation";

export default function ReservationMovieInfo() {
    const movieInfo = useRecoilValue(selectedMovieInfo);
    const setAppView = useSetRecoilState(appViewAtom);
    const posterURL = POSTER_IMAGE_URL[parseInt(movieInfo?.rank ?? "0") -1].url;


    return <MovieInfoContainer>
        <img src={posterURL} alt="" style={{width:"160px", borderRadius:"5px"}}/>
        <h2>{movieInfo?.movieNm}</h2>
        <p>{movieInfo?.openDt}</p>
        <button onClick={()=> setAppView(APP_VIEW.movieIntro)}>이전</button>

        <MakeReservation />

    </MovieInfoContainer>
}

const MovieInfoContainer = styled.div`
    
`