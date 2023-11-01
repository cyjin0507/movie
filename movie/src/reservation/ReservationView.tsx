import styled from "styled-components"
import ReservationMovieInfo from "../util/components/ReservationMovieInfo"
import Theator from "./components/theator/Theator"

export default function ReservationView() {

    return <ReservaitonContainer>
        <ReservationMovieInfo />
        <Theator />
    </ReservaitonContainer>
}

const ReservaitonContainer = styled.div`
    width: 1200px;
    margin: auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`