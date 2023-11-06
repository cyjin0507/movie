import Storage from "../util/storage";

export function getSeatReservationStatus(seatNumber : string, movieSeq : string) {
    const getReservationData = Storage.getReservationData()   
    
    if(getReservationData[movieSeq] === undefined) return false
    return getReservationData[movieSeq][seatNumber] ? true : false
}