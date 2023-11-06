import { useSetRecoilState } from "recoil";
import { APP_VIEW, addDefaultImg } from "../../constants";
import { movieListResult } from "../../types";
import { appViewAtom, selectedMovieInfo } from "../../util/recoil";
import styled from "styled-components";

export default function MovieItem(
    {
        movieInfo,
    } : {
        movieInfo : movieListResult;
    }
) {
    const setAppView = useSetRecoilState(appViewAtom);
    const setSelectedMovieInfo = useSetRecoilState(selectedMovieInfo);

    const handleMoveMovieIntroView = () => {
        setAppView(APP_VIEW.movieIntro);
        setSelectedMovieInfo(movieInfo);
    }

    return <div className="slider" onClick={handleMoveMovieIntroView} onDrag={(e)=> e.preventDefault()}>
        <img src={movieInfo.posters.split('|')[0]} onError={addDefaultImg} alt="movie"/>
        <MoviceInfoContainer>
            <h5>{movieInfo.title.replace(/!HS/gi, '').replace(/!HE/gi, '')}</h5>
            <p>{movieInfo.repRlsDate}</p>
        </MoviceInfoContainer>
        {/* <Rank>1</Rank> */}
    </div>
}

// const Rank = styled.div`
//     font-size: 30px;
//     position: absolute;
//     top: 0;
//     left: 10px;
//     font-weight: bold;
//     font-size: 50px;
// `

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