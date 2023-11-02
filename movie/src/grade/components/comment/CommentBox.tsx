import styled from "styled-components"
import CommentInput from "./CommentInput"
import CommentItemList from "./CommentItemList"

export default function CommentBox() {

    return <CommentBoxContainer>
        <CommentItemList />
        <CommentInput />
    </CommentBoxContainer>
}

const CommentBoxContainer = styled.div`
    width: 700px;
    height: 450px;
    background-color: #ffffff11;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    border: 1px solid #5a5a5a;
`