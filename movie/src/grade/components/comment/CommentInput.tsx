import { useState } from "react"
import styled from "styled-components"
import { ENTER_KEY } from "../../../constants";
import { useRecoilState, useRecoilValue } from "recoil";
import { gradeList, selectedMovieInfo } from "../../../util/recoil";
import Storage from "../../../util/storage";

export default function CommentInput() {
    const [commentInput, setCommentInput] = useState("");
    const [commentListData, setCommentListData] = useRecoilState(gradeList);
    const movieInfo = useRecoilValue(selectedMovieInfo);
    const movieSeq = movieInfo?.movieSeq ?? "";

    const onSaveComment = () => {
        const copyCommentListData = JSON.parse(JSON.stringify(commentListData));
        if(copyCommentListData[movieSeq] === undefined) {
            copyCommentListData[movieSeq] = {
                movieCommentList : [],
                movieScoreList : [],
            };
        }

        copyCommentListData[movieSeq].movieCommentList.push({
            comment : commentInput,
        })
        
        setCommentListData(copyCommentListData)
        Storage.setGradeData(copyCommentListData)
        setCommentInput("")
    }

    return <Input type="text" autoFocus onKeyDown={(e) => {
        if (e.keyCode === ENTER_KEY) {
            onSaveComment();
        }
    }}
    onChange={(e)=>setCommentInput(e.target.value)}
    value={commentInput}
    />
}

const Input = styled.input`
    position: absolute;
    width: 100%;
    bottom: -6px;
    left: -2px;
    height: 35px;
    font-size: 16px;
    font-weight: bold;
    background-color: #252525;
    padding: 5px 15px;
    border: none;

    &:focus {
        outline: none;
    }
    
`