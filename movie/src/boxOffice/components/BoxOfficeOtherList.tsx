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
            boxOfficeOtherList?.map((boxOfficeItem, key) => {
                return <BoxOfficeOtherListItem
                    key={key}
                    boxOfficeItem={boxOfficeItem}
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
    margin-top: 40px;
`;

