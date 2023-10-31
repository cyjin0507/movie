import { useEffect, useState } from "react";
import { getBoxOfficeList } from "../util/api"
import { boxOffice } from "../types";
import BoxOfficeTopList from "./components/BoxOfficeTopList";
import Loading from "../util/components/Loading";
import BoxOfficeOtherList from "./components/BoxOfficeOtherList";

export default function BoxOfficeView() {
    const [boxOfficeList, setBoxOfficeList] = useState<boxOffice | null>(null);

    async function getAPIBoxOfficeList() {
        const today = "20231029";
        const boxOffice = await getBoxOfficeList(today);

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
                <div>
                    <h3>박스오피스 <span>TOP10</span></h3>
                    <BoxOfficeTopList
                        boxOfficeTopList={boxOfficeTopList}/>
                    <BoxOfficeOtherList
                        boxOfficeOtherList={boxOfficeOtherList}
                    />
                </div>

                : <Loading />
        
        
        }
        
    </>
}

