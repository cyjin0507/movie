import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { commentList, selectedMovieInfo } from "../../../util/recoils/utilRecoil"
import CommentItem from "./CommentItem";

export default function CommentItemList() {
    const commentListData = useRecoilValue(commentList);
    const movieInfo = useRecoilValue(selectedMovieInfo);


    const findCommentListData = commentListData[movieInfo?.movieCd ?? ""] ?? [];

    return <CommentItemListContainer>
        {
            findCommentListData.map((comment, n) => {
                return <CommentItem comment={comment.comment} key={n} />
            })
        }
    </CommentItemListContainer>
}

const CommentItemListContainer = styled.div`
    height: 400px;
    padding: 20px 30px;
    padding-bottom: 40px;
    overflow-y: auto;
    display: flex;
    flex-direction: column-reverse;

    &::-webkit-scrollbar {
        display: none;
    }
`