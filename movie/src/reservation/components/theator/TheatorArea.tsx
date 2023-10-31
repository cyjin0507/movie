import styled from "styled-components"
import TheatorSeat from "./TheatorSeat";
import { useRecoilState, useRecoilValue } from "recoil";
import { reservationList, selectedMovieInfo } from "../../../util/recoils/utilRecoil";

export default function TheatorArea() {
    const row = 10;

    const movieInfo = useRecoilValue(selectedMovieInfo);
    const [reservationData, setReservationData] = useRecoilState(reservationList);

    // 이부분 오류 수정 필요
    if(reservationData[movieInfo?.audiAcc ?? ""] === undefined) {
        reservationData[movieInfo?.audiAcc ?? ""] = {
            seatNumber : "fd"
        }
        
        setReservationData({...reservationData})
    }
    

    return <TheatorSeatContainer>
        <TheatorSideSeat>
            {
                Array.from({length: (row * 2)}).map((_,n)=> {
                    return <TheatorSeat key={n} seatNumber={"A" + (n+1)}/>
                })
            }
        </TheatorSideSeat>

        <TheatorCenterSeat>
            {
                Array.from({length: (row * 7)}).map((_,n)=> {
                    return <TheatorSeat key={n} seatNumber={"B" + (n+1)}/>
                })
            }
        </TheatorCenterSeat>

        <TheatorSideSeat>
            {
                Array.from({length: (row * 2)}).map((_,n)=> {
                    return <TheatorSeat key={n} seatNumber={"C" + (n+1)}/>
                })
            }
        </TheatorSideSeat>
    </TheatorSeatContainer>
}

const TheatorSeatContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
`

const TheatorSideSeat = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
`

const TheatorCenterSeat = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
`