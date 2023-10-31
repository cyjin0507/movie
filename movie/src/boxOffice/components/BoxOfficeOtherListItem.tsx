import { BoxOfficeItemContainer, BoxOfficeItemIntroduce, Rank } from "../BoxOfficeStyles";

export default function BoxOfficeOtherListItem(
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
        <Rank>{rank}</Rank>
        <BoxOfficeItemIntroduce>
            <h5>{movieNm}</h5>
            <p>{openDt}</p>
        </BoxOfficeItemIntroduce>
    </BoxOfficeItemContainer>
}



