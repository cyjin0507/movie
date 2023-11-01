import { useRecoilValue, useSetRecoilState } from "recoil";
import { appViewAtom, selectedMovieInfo } from "../../util/recoils/utilRecoil";
import styled from "styled-components";
import { APP_VIEW } from "../../constants";
import MakeReservation from "./MakeReservation";

export default function ReservationMovieInfo() {
    const movieInfo = useRecoilValue(selectedMovieInfo);
    const setAppView = useSetRecoilState(appViewAtom);


    return <MovieInfoContainer>
        <img src="https://via.placeholder.com/160x200" alt="" />
        <h2>{movieInfo?.movieNm}</h2>
        <p>{movieInfo?.openDt}</p>
        <button onClick={()=> setAppView(APP_VIEW.movieIntro)}>이전</button>

        <MakeReservation />

    </MovieInfoContainer>
}

const MovieInfoContainer = styled.div`
    
`