import { useRecoilState, useRecoilValue } from "recoil";
import { reservationList } from "../util/recoils/utilRecoil";
import { reservationData } from "../types";
import Storage from "../util/storage";

// props를 직접 수정할 수 없음 (recoil)
// const copyReservationData = {...getReservationData}

// export function saveReservationStorage(reservationList : reservationData) {
//     setReservationData({...reservationList});
//     Storage.setReservationAppData({...reservationList});
// }



export function getSeatReservationStatus(seatNumber : string, audiAcc : string) {
    const getReservationData = useRecoilValue(reservationList);
    
    if(getReservationData[seatNumber] === undefined) return false
    return getReservationData[seatNumber][audiAcc] ? true : false
}