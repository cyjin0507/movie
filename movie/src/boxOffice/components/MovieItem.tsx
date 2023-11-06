import { useSetRecoilState } from "recoil";
import { APP_VIEW, POSTER_IMAGE_URL } from "../../constants";
import { dailyBoxOfficeItem } from "../../types";
import { appViewAtom, selectedMovieInfo } from "../../util/recoil";
import styled from "styled-components";

export default function MovieItem(
    {
        movieInfo,
    } : {
        movieInfo : dailyBoxOfficeItem;
    }
) {
    const setAppView = useSetRecoilState(appViewAtom);
    const setSelectedMovieInfo = useSetRecoilState(selectedMovieInfo);

    const handleMoveMovieIntroView = () => {
        setAppView(APP_VIEW.movieIntro)
        setSelectedMovieInfo(movieInfo)
    }

    return <div className="slider" onClick={handleMoveMovieIntroView} onDrag={(e)=> e.preventDefault()}>
        <img src={POSTER_IMAGE_URL[parseInt(movieInfo.rank) - 1].url} alt="movie" />
        <MoviceInfoContainer>
            <h5>{movieInfo.movieNm}</h5>
            <p>{movieInfo.openDt}</p>
        </MoviceInfoContainer>
        <Rank>{movieInfo.rank}</Rank>
    </div>
}

const Rank = styled.div`
    font-size: 30px;
    position: absolute;
    top: 0;
    left: 10px;
    font-weight: bold;
    font-size: 50px;
`

const MoviceInfoContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #0000008d;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    transition: all .5s;
    opacity: 0;

    ${'.slider'}:hover & {
        opacity: 1;
    }

    ${'h5'} {
        font-size: 20px;
    }
`