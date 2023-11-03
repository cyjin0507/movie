import styled from "styled-components"
import StarBox from "./star/StarBox"

export default function GradeBox() {

    return <GradeBoxContainer>
        <StarBox />
    </GradeBoxContainer>
}

const GradeBoxContainer = styled.div`
    margin-top: 30px;
`