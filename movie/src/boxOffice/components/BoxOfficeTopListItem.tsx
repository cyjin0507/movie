import { useSetRecoilState } from "recoil";
import { BoxOfficeItemContainer, BoxOfficeItemIntroduce, Rank } from "../BoxOfficeStyles";
import { appViewAtom, selectedMovieInfo } from "../../util/recoils/utilRecoil";
import { APP_VIEW } from "../../constants";
import { dailyBoxOfficeItem } from "../../types";

export default function BoxOfficeTopListItem(
    {
        boxOfficeItem,
    } : {
        boxOfficeItem: dailyBoxOfficeItem;
    }
) {
    const setAppView = useSetRecoilState(appViewAtom);
    const setSelectedMovieInfo = useSetRecoilState(selectedMovieInfo);

    const handleMoveMovieIntroView = () => {
        setAppView(APP_VIEW.movieIntro)
        setSelectedMovieInfo(boxOfficeItem)
    }

    return <BoxOfficeItemContainer onClick={handleMoveMovieIntroView}>
        <img src="https://via.placeholder.com/160x200" alt="" />
        <Rank $rankType="top">{boxOfficeItem.rank}</Rank>
        <BoxOfficeItemIntroduce>
            <h5>{boxOfficeItem.movieNm}</h5>
            <p>{boxOfficeItem.openDt}</p>
        </BoxOfficeItemIntroduce>
    </BoxOfficeItemContainer>
}



