import { useEffect, useState } from "react";
import { getBoxOfficeList } from "../util/api"
import { boxOffice } from "../types";
import Loading from "../util/components/Loading";
import BoxOfficeList from "./components/BoxOfficeList";

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

    return <>
        {
            boxOfficeList ? 
                <BoxOfficeList boxOfficeData={boxOfficeList?.boxOfficeResult.dailyBoxOfficeList}/>

                : <Loading />
        
        
        }
        
    </>
}
