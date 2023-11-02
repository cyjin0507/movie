import styled from "styled-components";

export default function CommentItem(
    {
        comment,
    } : {
        comment : string;
    }
) {

   return <CommentItemContainer>
        {comment}
   </CommentItemContainer>;
}

const CommentItemContainer = styled.div`
    padding: 12px 25px;
    border-radius: 50px;
    background-color: #1d1d1d;
    width: fit-content;
    margin-bottom: 10px;
`