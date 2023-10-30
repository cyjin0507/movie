export interface boxOffice {
    boxOfficeResult : boxOfficeResult
}


export interface boxOfficeResult {
    boxofficeType : string;
    dailyBoxOfficeList : dailyBoxOfficeList[];
    showRange : string;
}


export interface dailyBoxOfficeList {
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
    ]
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