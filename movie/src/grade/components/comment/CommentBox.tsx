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
    width: 500px;
    height: 260px;
    background-color: #ffffff11;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    border: 1px solid #343434;
    margin-top: 10px;
`