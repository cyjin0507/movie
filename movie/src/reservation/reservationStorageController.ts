import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { reservationList } from "../util/recoils/utilRecoil";
import { reservationData } from "../types";
import Storage from "../util/storage";

export function getSeatReservationStatus(seatNumber : string, audiAcc : string) {
    const getReservationData = Storage.getReservationData()
    
    
    if(getReservationData[audiAcc] === undefined) return false
    return getReservationData[audiAcc][seatNumber] ? true : false
}