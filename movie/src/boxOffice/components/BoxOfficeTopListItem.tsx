import { BoxOfficeItemContainer, BoxOfficeItemIntroduce, Rank } from "../BoxOfficeStyles";

export default function BoxOfficeTopListItem(
    {
        movieNm,
        openDt,
        rank,
    } : {
        movieNm : string;
        openDt : string;
        rank : string;
    }
) {
    return <BoxOfficeItemContainer>
        <img src="https://via.placeholder.com/160x200" alt="" />
        <Rank $rankType="top">{rank}</Rank>
        <BoxOfficeItemIntroduce>
            <h5>{movieNm}</h5>
            <p>{openDt}</p>
        </BoxOfficeItemIntroduce>
    </BoxOfficeItemContainer>
}



