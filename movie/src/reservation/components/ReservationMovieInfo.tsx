import { useRecoilValue, useSetRecoilState } from "recoil";
import { appViewAtom, selectedMovieInfo } from "../../util/recoils/utilRecoil";
import styled from "styled-components";
import { APP_VIEW } from "../../constants";

export default function ReservationMovieInfo() {
    const movieInfo = useRecoilValue(selectedMovieInfo);
    const setAppView = useSetRecoilState(appViewAtom);
    
    return <MovieInfoContainer>
        <img src="https://via.placeholder.com/160x200" alt="" />
        <h2>{movieInfo?.movieNm}</h2>
        <p>{movieInfo?.openDt}</p>
        <button onClick={()=> setAppView(APP_VIEW.movieIntro)}>예약취소</button>
    </MovieInfoContainer>
}

const MovieInfoContainer = styled.div`
    
`