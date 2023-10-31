import { useRecoilState, useSetRecoilState } from "recoil";
import { appViewAtom, selectedMovieInfo } from "../../util/recoils/utilRecoil";
import styled from "styled-components";
import { APP_VIEW } from "../../constants";

export default function MovieInfo(
    {
        setIsSecurityModal,
    } : {
        setIsSecurityModal : (bool : boolean)=> void;
    }
) {
    const [movieInfo, unselectedMovieInfo] = useRecoilState(selectedMovieInfo);
    const setAppView = useSetRecoilState(appViewAtom);

    const handleMovieListPage = () => {
        unselectedMovieInfo(null);
        setAppView(APP_VIEW.movieList);
    }
    
    return <MovieInfoContainer>
        <div>
            <h2>{movieInfo?.movieNm}</h2>
            <div>
                <p>
                    <span>개봉일 : </span>
                    {movieInfo?.openDt}
                </p>
                <p>
                    <span>누적 관람객 : </span>
                    {movieInfo?.audiCnt}명
                </p>
            </div>
        </div>
        <div>
            <div>
                <button onClick={()=>setIsSecurityModal(true)}>예매하기</button>
                <button>평점작성</button>
                <button onClick={handleMovieListPage}>닫기</button>
            </div>
        </div>
    </MovieInfoContainer>
}

const MovieInfoContainer = styled.div`
    width: 900px;
    display: flex;
    justify-content: space-between;

    ${'span'} {
        font-size: 12px;
    }

    & > ${'div'}:nth-child(2) > ${'div'} {
        display: flex;
        gap: 20px;
        margin-top: 15px;
    }

    ${'button'}:nth-child(1) {
        background-color: #c40062;
        width: 120px;
    }

    ${'button'}:nth-child(2) {
        border: 2px solid #c40062;
        background-color: #ffffffd5;
        color: #c40062;
        width: 120px;
    }
`