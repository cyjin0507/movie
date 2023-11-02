import styled from "styled-components"
import ReservationMovieInfo from "../util/components/ReservationMovieInfo"
import CommentBox from "./components/comment/CommentBox"

export default function GradeView() {

    return <GradeContainer>
        <ReservationMovieInfo />
        <CommentBox />
    </GradeContainer>
}

const GradeContainer = styled.div`
    width: 1220px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 50px;
`