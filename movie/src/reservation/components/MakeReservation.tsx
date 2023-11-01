import styled from "styled-components"
import { reservationList, selectedMovieInfo } from "../../util/recoils/utilRecoil";
import { useRecoilState, useRecoilValue } from "recoil";
import SelectedSeatNumber from "./SelectedSeatNumber";
import Storage from "../../util/storage";

export default function MakeReservation() {
    const [reservationData, setReservationData] = useRecoilState(reservationList);
    const movieInfo = useRecoilValue(selectedMovieInfo);

    const copyReservationData = JSON.parse(JSON.stringify(reservationData)); // 이게 맞나

    if (copyReservationData[movieInfo?.audiAcc ?? ""] === undefined) {
        copyReservationData[movieInfo?.audiAcc ?? ""] = {}
    }

    const myReservationList = copyReservationData[movieInfo?.audiAcc ?? ""];
    const ReservationArr = Object.entries(myReservationList);

    const handleCancelReservation = (seatNumber: string) => {
        copyReservationData[movieInfo?.audiAcc ?? ""][seatNumber] = false
        setReservationData(copyReservationData)
    }

    const handleSaveReservation = () => {
        const basicData = Storage.getReservationData()[movieInfo?.audiAcc ?? ""];
        Object.assign(copyReservationData[movieInfo?.audiAcc ?? ""], basicData)
        Object.assign(copyReservationData, Storage.getReservationData())
        
        alert("예매가 완료되었습니다.");
        setReservationData({});
        Storage.setReservationAppData(copyReservationData);
    }

    return <>
        <TemporaryReservationList>
            {
                ReservationArr.map((seat, n) => {

                    return seat[1] ? <SelectedSeatNumber key={n} seatNumber={seat[0]} handleCancelReservation={() => handleCancelReservation(seat[0])} /> : <></>
                })
            }
        </TemporaryReservationList>
        {
            ReservationArr.find(x=>x[1]) ? <ReservationButton onClick={handleSaveReservation}>예매하기</ReservationButton> : <></>
        }
    </>
}

const TemporaryReservationList = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
`

const ReservationButton = styled.button`
    width: 100px;
    background-color: #C40062;
    margin-top: 30px;
`