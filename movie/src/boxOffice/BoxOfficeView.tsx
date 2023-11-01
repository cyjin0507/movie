import { useEffect, useState } from "react";
import { getBoxOfficeList } from "../util/api"
import { boxOffice } from "../types";
import BoxOfficeTopList from "./components/BoxOfficeTopList";
import Loading from "../util/components/Loading";
import BoxOfficeOtherList from "./components/BoxOfficeOtherList";
import styled from "styled-components";

export default function BoxOfficeView() {
    const [boxOfficeList, setBoxOfficeList] = useState<boxOffice | null>(null);

    async function getAPIBoxOfficeList() {
        const today = "20231029";
        const boxOffice = await getBoxOfficeList(today);
        console.log(boxOffice);
        
        setBoxOfficeList({...boxOffice})
    }

    useEffect(()=> {
        getAPIBoxOfficeList();
    }, [])

    const boxOfficeTopList = boxOfficeList?.boxOfficeResult.dailyBoxOfficeList.slice(0,3)
    const boxOfficeOtherList = boxOfficeList?.boxOfficeResult.dailyBoxOfficeList.slice(3,10)
    

    return <>
        {
            boxOfficeList ? 
                <BoxOfficeContainer>
                    <h2 style={{textAlign : "center"}}>박스오피스 <span>TOP10</span></h2>
                    <BoxOfficeTopList
                        boxOfficeTopList={boxOfficeTopList}/>
                    <BoxOfficeOtherList
                        boxOfficeOtherList={boxOfficeOtherList}
                    />
                </BoxOfficeContainer>

                : <Loading />
        
        
        }
        
    </>
}

const BoxOfficeContainer = styled.div`
    width: 1220px;
    margin: auto;
`

