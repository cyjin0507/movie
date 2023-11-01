import styled from "styled-components"
import { reservationList, selectedMovieInfo } from "../../util/recoils/utilRecoil";
import { useRecoilState, useRecoilValue } from "recoil";
import SelectedSeatNumber from "./SelectedSeatNumber";

export default function MakeReservation() {
    const [reservationData, setReservationData] = useRecoilState(reservationList);
    const movieInfo = useRecoilValue(selectedMovieInfo);

    const copyReservationData = JSON.parse(JSON.stringify(reservationData)); // 이게 맞나

    if(copyReservationData[movieInfo?.audiAcc ?? ""] === undefined) {
        copyReservationData[movieInfo?.audiAcc ?? ""] = {}
    }

    const myReservationList = copyReservationData[movieInfo?.audiAcc ?? ""];
    const ReservationArr = Object.entries(myReservationList);

    const handleCancelReservation = (seatNumber : string) => {
        copyReservationData[movieInfo?.audiAcc ?? ""][seatNumber] = false
        setReservationData(copyReservationData)
    }

    return <TemporaryReservationList>
        {
            ReservationArr.map((seat, n)=> {
                
                return seat[1] ? <SelectedSeatNumber key={n} seatNumber={seat[0]}  handleCancelReservation={()=>handleCancelReservation(seat[0])}/> : <></>
            })
        }
    </TemporaryReservationList>
}

const TemporaryReservationList = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
`