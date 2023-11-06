import { boxOffice, movieList } from "../types";

export async function getBoxOfficeList(targetDate:string) : Promise<boxOffice> {
    const api = await fetch(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${targetDate}`);
    const parse = await api.json();
    return parse;
}

const SERVICE_KEY = "DYX6FDA6T09FXA33Q8N9";

export async function getGenreMovieList(genre:string) : Promise<movieList> {
    const api = await fetch(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&genre=${genre}&releaseDts=20231101&ServiceKey=${SERVICE_KEY}`);
    const parse = await api.json();
    return parse;
}

export async function getTitleMovieList(title:string|null) : Promise<movieList> {
    const api = await fetch(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${title}&ServiceKey=${SERVICE_KEY}`);
    const parse = await api.json();
    return parse;
}