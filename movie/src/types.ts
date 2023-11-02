import { APP_VIEW } from "./constants";

export interface boxOffice {
    boxOfficeResult : boxOfficeResult
}

export interface boxOfficeResult {
    boxofficeType : string;
    dailyBoxOfficeList : [
        dailyBoxOfficeItem,
        dailyBoxOfficeItem,
        dailyBoxOfficeItem,
        dailyBoxOfficeItem,
        dailyBoxOfficeItem,
        dailyBoxOfficeItem,
        dailyBoxOfficeItem,
        dailyBoxOfficeItem,
        dailyBoxOfficeItem,
        dailyBoxOfficeItem,
    ];
    showRange : string;
}

export interface dailyBoxOfficeItem {
    audiAcc : string;
    audiChange : string;
    audiCnt : string;
    audiInten : string;
    movieCd : string;
    movieNm : string;
    openDt : string;
    rank : string;
    rankInten : string;
    rankOldAndNew : string;
    rnum : string;
    salesAcc : string;
    salesAmt : string;
    salesChange : string;
    salesInten : string;
    salesShare : string;
    scrnCnt : string;
    showCnt : string;
}

export type AppView = typeof APP_VIEW[keyof typeof APP_VIEW];


export interface reservationData {
    [movieCd : string] : reservationSeatList
}

export interface reservationSeatList {
    [seatNumber : string] : boolean
}

export interface movieCommentData {
    [movieCd : string] : movieCommentList[]
}

export interface movieCommentList {
    comment : string,
}