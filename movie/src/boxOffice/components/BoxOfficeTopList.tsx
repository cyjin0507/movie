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
                
                
                return "Test"
                // return <BoxOfficeTopListItem
                //     movieNm={boxOfficeItem.movieNm}
                //     openDt={boxOfficeItem.openDt}
                //     rank={boxOfficeItem.rank}
                // />
            })
        }
    </BoxOfficeTopListContainer>
}

const BoxOfficeTopListContainer = styled.div`
    width:500px;
    margin:auto;
`;

