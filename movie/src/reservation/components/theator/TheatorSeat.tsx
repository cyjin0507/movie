import styled from "styled-components"

export default function TheatorSeat(
    {
        seatNumber,
    } : {
        seatNumber : string
    }
) {

    return <Seat>
        {seatNumber}
    </Seat>
}

const Seat = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`