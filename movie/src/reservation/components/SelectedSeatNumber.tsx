import styled from "styled-components";

export default function SelectedSeatNumber({
    seatNumber,
    handleCancelReservation,
} : {
    seatNumber : string;
    handleCancelReservation : ()=>void;
}) {

    return <SeatNumberContainer>
        <div>{seatNumber}</div>
        <button onClick={handleCancelReservation}>x</button>
    </SeatNumberContainer>
}

const SeatNumberContainer = styled.div`
    padding-left: 15px;
    display: flex;
    justify-content: space-between;
    width: 100px;
    background-color: #4b4b4b;
    border-radius: 50px;
    overflow: hidden;

    ${'div'} {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ${'button'} {
        background-color: #4b4b4b;
    }
`