import { useRecoilValue, useSetRecoilState } from "recoil";
import { appViewAtom, selectedMovieInfo } from "../recoils/utilRecoil";
import styled from "styled-components";
import { APP_VIEW } from "../../constants";
import MakeReservation from "../../reservation/components/MakeReservation";

export default function ReservationMovieInfo() {
    const movieInfo = useRecoilValue(selectedMovieInfo);
    const setAppView = useSetRecoilState(appViewAtom);
    const posterURL = movieInfo?.posters.split('|')[0];


    return <MovieInfoContainer>
        <img src={posterURL} alt="" style={{width:"160px", borderRadius:"5px"}}/>
        <h2>{movieInfo?.title.replace(/!HS/gi, '').replace(/!HE/gi, '')}</h2>
        <p>{movieInfo?.repRlsDate}</p>
        <button onClick={()=> setAppView(APP_VIEW.movieIntro)}>이전</button>

        <MakeReservation />

    </MovieInfoContainer>
}

const MovieInfoContainer = styled.div`

`