import styled from "styled-components"
import ReservationMovieInfo from "../util/components/ReservationMovieInfo"
import CommentBox from "./components/comment/CommentBox"
import GradeBox from "./components/grade/GradeBox"

export default function GradeView() {

    return <GradeContainer>
        <ReservationMovieInfo />
        <MovieGradeArea>
            <CommentBox />
            <GradeBox />
        </MovieGradeArea>
    </GradeContainer>
}

const GradeContainer = styled.div`
    width: 1220px;
    display: flex;
    gap: 150px;
    margin: auto;
    margin-top: 50px;
`

const MovieGradeArea = styled.div`
    
`