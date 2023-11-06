import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { gradeList, selectedMovieInfo } from "../../../util/recoils/utilRecoil"
import CommentItem from "./CommentItem";

export default function CommentItemList() {
    const commentListData = useRecoilValue(gradeList);
    const movieInfo = useRecoilValue(selectedMovieInfo);

    const findCommentListData = (commentListData[movieInfo?.movieSeq ?? ""] ?? []).movieCommentList ?? [];
    
    return <CommentItemListContainer>
        {
            [...findCommentListData].reverse().map((comment, n) => {
                return <CommentItem comment={comment.comment} key={n} />
            })
        }
    </CommentItemListContainer>
}

const CommentItemListContainer = styled.div`
    height: 230px;
    padding: 20px 30px;
    padding-bottom: 0px;
    overflow-y: auto;
    display: flex;
    flex-direction: column-reverse;

    &::-webkit-scrollbar {
        display: none;
    }
`