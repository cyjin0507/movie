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

export interface movieGradeData {
    [movieCd : string] : movieGrade
}

export interface movieGrade {
    movieCommentList : movieCommentList[];
    movieScoreList : movieScoreList[];
}

export interface movieCommentList {
    comment : string
}

export interface movieScoreList {
    score : number
}

//

export interface movieList {
    Query : string;
    KMAQuery : string;
    TotalCount : number;
    Data : movieListData[];
}

export interface movieListData {
    CollName : string;
    TotalCount : number;
    Count : number;
    Result : movieListResult[];
}

export interface movieListResult {
    DOCID : string;
    movieId : string;
    movieSeq : string;
    title : string;
    titleEng : string;
    titleOrg : string;
    titleEtc : string;
    prodYear : string;
    directors : movieDirectorsList;
    actors : movieActorsList;
    nation : string;
    company : string;
    plots : moviePlotsList;
    runtime : string;
    rating : string;
    genre : string;
    kmdbUrl : string;
    type : string;
    use : string;
    episodes : string;
    ratedYn : string;
    repRatDate : string;
    repRlsDate : string;
    ratings : movieRatingsList;
    keywords : string;
    posters : string;
    stlls : string;
    staffs : movieStaffsList;
    vods : movieVodsList;
    openThtr : string;
    stat : movieStatList[];
    screenArea : string;
    screenCnt : string;
    salesAcc : string;
    audiAcc : string;
    statSouce : string;
    statDate : string;
    themeSong : string;
    soundtrack : string;
    fLocation : string;
    Awards1 : string;
    Awards2 : string;
    regDate : string;
    modDate : string;
    Codes : movieCodesList;
    CommCodes : movieCommCodesList;
    ALIAS : string;
}

export interface movieDirectorsList {
    director : movieDirector[];
}

export interface movieDirector {
    directorNm : string;
    directorEnNm : string;
    directorId : string;
}

export interface movieActorsList {
    actor : movieActor[];
}

export interface movieActor {
    actorNm : string;
    actorEnNm : string;
    actorId : string;
}

export interface moviePlotsList {
    plot : moviePlot[];
}

export interface moviePlot {
    plotLang : string;
    plotText : string;
}

export interface movieRatingsList {
    rating : movieRating[];
}

export interface movieRating {
    ratingMain : string;
    ratingDate : string;
    ratingNo : string;
    ratingGrade : string;
    releaseDate : string;
    runtime : string;
}

export interface movieStaffsList {
    staff : movieStaff[];
}

export interface movieStaff {
    staffNm : string;
    staffEnNm : string;
    staffRoleGroup : string;
    staffRole : string;
    staffEtc : string;
    staffId : string;
}

export interface movieVodsList {
    vod : movieVod[];
}

export interface movieVod {
    vodClass : string;
    vodUrl : string;
}

export interface movieStatList {
    screenArea : string;
    screenCnt : string;
    salesAcc : string;
    audiAcc : string;
    statSouce : string;
    statDate : string;
}

export interface movieCodesList {
    Code : movieCode[];
}

export interface movieCode {
    CodeNm : string;
    CodeNo : string;
}

export interface movieCommCodesList {
    CommCode : movieCommCode[];
}

export interface movieCommCode {
    CodeNm : string;
    CodeNo : string;
}