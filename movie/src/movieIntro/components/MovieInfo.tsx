import { useRecoilValue } from "recoil"
import { selectedMovieInfo } from "../../util/recoils/utilRecoil"
import styled from "styled-components";
import { addDefaultImg } from "../../constants";

export default function MovieInfo() {
    const movieInfo = useRecoilValue(selectedMovieInfo);

    return <MovieInfoContainer>
        <img src={movieInfo?.posters.split('|')[0]} onError={addDefaultImg} alt=""  style={{width:"160px", borderRadius:"5px"}} />
        <p>{movieInfo?.plots.plot[0].plotText}</p>
        <div>
            <p>
                상영시간 : <span>{movieInfo?.runtime}분</span>
            </p>
            <p>
                제작년도 : <span>{movieInfo?.prodYear}년</span>
            </p>
            <p>
                감독 : <span>{movieInfo?.directors.director[0].directorNm}</span>
            </p>
            <div className="actors">
                <div>배우 : </div>
                <div>
                    {
                        movieInfo?.actors.actor.map((actor, index)=> {
                            return <div key={index}><span>{actor.actorNm}</span><br /></div>;
                        })
                    }
                 </div>
            </div>
            <p>
                장르 : <span>{movieInfo?.genre}</span>
            </p>
        </div>
    </MovieInfoContainer>
}

const MovieInfoContainer = styled.div`
    width: 350px;
    height: 90vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    ${'> div'} {
        margin-top: 30px;
    }

    ${'p'} {
        opacity: .8;

        ${'span'} {
            font-weight: bold;
            opacity: 1;
        }
    }

    ${'.actors'} {
        display: flex;
        gap: 10px;
    }
`