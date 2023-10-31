import styled from "styled-components";
import { dailyBoxOfficeItem } from "../../types"
import BoxOfficeTopListItem from "./BoxOfficeTopListItem";

export default function BoxOfficeTopList(
    {
        boxOfficeTopList,
    } : {
        boxOfficeTopList : dailyBoxOfficeItem[] | undefined;
    }
) {

    return <BoxOfficeTopListContainer>
        {
            boxOfficeTopList?.map((boxOfficeItem)=> {
                return <BoxOfficeTopListItem
                    movieNm={boxOfficeItem.movieNm}
                    openDt={boxOfficeItem.openDt}
                    rank={boxOfficeItem.rank}
                />
            })
        }
    </BoxOfficeTopListContainer>
}

const BoxOfficeTopListContainer = styled.div`
    width:560px;
    margin:auto;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
`;

