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
            boxOfficeTopList?.map((boxOfficeItem, key)=> {
                return <BoxOfficeTopListItem
                    key={key}
                    boxOfficeItem={boxOfficeItem}
                />
            })
        }
    </BoxOfficeTopListContainer>
}

const BoxOfficeTopListContainer = styled.div`
    width:560px;
    margin:auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
`;

