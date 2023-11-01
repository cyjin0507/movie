import Storage from "../util/storage";

export function getSeatReservationStatus(seatNumber : string, audiAcc : string) {
    const getReservationData = Storage.getReservationData()
    
    
    if(getReservationData[audiAcc] === undefined) return false
    return getReservationData[audiAcc][seatNumber] ? true : false
}