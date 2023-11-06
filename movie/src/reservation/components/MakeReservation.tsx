import styled from "styled-components"
import { reservationList, selectedMovieInfo } from "../../util/recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import SelectedSeatNumber from "./SelectedSeatNumber";
import Storage from "../../util/storage";

export default function MakeReservation() {
    const [reservationData, setReservationData] = useRecoilState(reservationList);
    const movieInfo = useRecoilValue(selectedMovieInfo);

    const copyReservationData = JSON.parse(JSON.stringify(reservationData)); // 이게 맞나

    if (copyReservationData[movieInfo?.movieSeq ?? ""] === undefined) {
        copyReservationData[movieInfo?.movieSeq ?? ""] = {}
    }

    const myReservationList = copyReservationData[movieInfo?.movieSeq ?? ""];
    const ReservationArr = Object.entries(myReservationList);

    const handleCancelReservation = (seatNumber: string) => {
        copyReservationData[movieInfo?.movieSeq ?? ""][seatNumber] = false
        setReservationData(copyReservationData)
    }

    const handleSaveReservation = () => {
        const basicData = Storage.getReservationData();
        
        Object.assign(copyReservationData[movieInfo?.movieSeq ?? ""], basicData[movieInfo?.movieSeq ?? ""])
        basicData[movieInfo?.movieSeq ?? ""] = copyReservationData[movieInfo?.movieSeq ?? ""]
        
        alert("예매가 완료되었습니다.");
        setReservationData({});
        Storage.setReservationAppData(basicData);
    }

    return <>
        <TemporaryReservationList>
            {
                ReservationArr.map((seat, n) => {

                    return seat[1] ? <SelectedSeatNumber 
                                        key={n} 
                                        seatNumber={seat[0]} 
                                        handleCancelReservation={() => handleCancelReservation(seat[0])} /> 
                                    : <></>
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