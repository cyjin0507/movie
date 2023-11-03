import Storage from "../util/storage";

export function getSeatReservationStatus(seatNumber : string, movieCd : string) {
    const getReservationData = Storage.getReservationData()   
    
    if(getReservationData[movieCd] === undefined) return false
    return getReservationData[movieCd][seatNumber] ? true : false
}