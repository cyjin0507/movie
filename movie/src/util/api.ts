import { boxOffice } from "../types";

export async function getBoxOfficeList(targetDate:string) : Promise<boxOffice> {
    const api = await fetch(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${targetDate}`);
    const parse = await api.json();
    return parse;
}