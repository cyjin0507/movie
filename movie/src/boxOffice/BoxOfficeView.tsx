import { useEffect, useState } from "react";
import { getBoxOfficeList } from "../util/api"
import { boxOffice } from "../types";
import Loading from "../util/components/Loading";
import BoxOfficeList from "./components/BoxOfficeList";
import styled from "styled-components";

export default function BoxOfficeView() {
    const [boxOfficeList, setBoxOfficeList] = useState<boxOffice | null>(null);

    async function getAPIBoxOfficeList() {
        const today = "20231101";
        const boxOffice = await getBoxOfficeList(today);
        
        setBoxOfficeList({...boxOffice})
    }

    useEffect(()=> {
        getAPIBoxOfficeList();
    }, [])

    return <>
        {
            boxOfficeList ? 
                <BoxOfficeContainer>
                    <h2>Daily BoxOfiice TOP10</h2>
                    <BoxOfficeList boxOfficeData={boxOfficeList?.boxOfficeResult.dailyBoxOfficeList}/>
                </BoxOfficeContainer>

                : <Loading />

        
        }
        
    </>
}

const BoxOfficeContainer = styled.div`
    margin-top: 100px;

    ${'h2'} {
        text-align: center;
        margin-bottom: 30px;
    }
`