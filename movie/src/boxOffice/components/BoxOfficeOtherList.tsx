import styled from "styled-components";
import { dailyBoxOfficeItem } from "../../types";
import BoxOfficeOtherListItem from "./BoxOfficeOtherListItem";

export default function BoxOfficeOtherList(
    {
        boxOfficeOtherList,
    }: {
        boxOfficeOtherList: dailyBoxOfficeItem[] | undefined;
    }
) {

    return <BoxOfficeOtherListContainer>
        {
            boxOfficeOtherList?.map((boxOfficeItem) => {
                return <BoxOfficeOtherListItem
                    movieNm={boxOfficeItem.movieNm}
                    openDt={boxOfficeItem.openDt}
                    rank={boxOfficeItem.rank}
                />
            })
        }
    </BoxOfficeOtherListContainer>
}

const BoxOfficeOtherListContainer = styled.div`
    width:1220px;
    margin:auto;
    display: flex;
    justify-content: space-between;
    margin: 40px;
`;

