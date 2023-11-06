import styled from "styled-components"
import { reservationList } from "../../../util/recoil";
import { useRecoilState } from "recoil";
import { getSeatReservationStatus } from "../../reservationStorageController";

export default function TheatorSeat(
    {
        seatNumber,
        movieSeq,
    } : {
        seatNumber : string;
        movieSeq : string | undefined;
    }
) {
    const [reservationData, setReservationData] = useRecoilState(reservationList);
    const copyReservationData = JSON.parse(JSON.stringify(reservationData)); // 이게 맞나

    if(copyReservationData[movieSeq ?? ""] === undefined) {
        copyReservationData[movieSeq ?? ""] = {}
    }

    let reservationState = false;
    if(copyReservationData[movieSeq ?? ""][seatNumber] === undefined || !copyReservationData[movieSeq ?? ""][seatNumber]) {
        reservationState = false;
    } else {
        reservationState = true;
    }

    const temporarySeatReservation = () => {
        copyReservationData[movieSeq ?? ""][seatNumber] = !reservationState
        setReservationData(copyReservationData)
    }

    return <Seat onClick={temporarySeatReservation} disabled={getSeatReservationStatus(seatNumber, movieSeq ?? "")} $state={reservationState}>
        {seatNumber}
    </Seat>
}

const Seat = styled.button<{$state:boolean}>`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props)=>props.$state ? '#5e0230' : '#1a1a1a'};
`