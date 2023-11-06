import styled from "styled-components"
import StarInput from "./StarInput"
import { useState } from "react";
import { gradeList, selectedMovieInfo } from "../../../../util/recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import Storage from "../../../../util/storage";

export default function StarBox() {
    const [selectedStarInput, setSelectedStarInput] = useState(-1);
    const [gradeListData, setGradeListData] = useRecoilState(gradeList);
    const movieInfo = useRecoilValue(selectedMovieInfo);
    const movieSeq = movieInfo?.movieSeq ?? "";

    const handleStarControl = (starNumber: number) => {
        setSelectedStarInput(starNumber);
    }

    const handleStarSave = () => {
        const copyGradeListData = JSON.parse(JSON.stringify(gradeListData));

        if(selectedStarInput === -1) {
            alert("평점을 선택해주세요.");
            return;
        }

        if(copyGradeListData[movieSeq] === undefined) {
            copyGradeListData[movieSeq] = {
                movieCommentList : [],
                movieScoreList : [],
            };
        }

        copyGradeListData[movieSeq].movieScoreList.push({
            score : selectedStarInput + 1
        })
        
        alert("평점 등록이 완료되었습니다.");
        setGradeListData(copyGradeListData);
        Storage.setGradeData(copyGradeListData);
        setSelectedStarInput(-1);
    }

    return <StarBoxContainer>
        <StarCount>{selectedStarInput + 1} <span> / 5 </span>점</StarCount>
        <StarInputList>
            {
                Array.from({ length: 5 }).map((_, n) => {
                    return <StarInput
                        key={n}
                        starNumber={n}
                        handleStarControl={(starNumber: number) => handleStarControl(starNumber)}
                        selectedStarInput={selectedStarInput}
                    />
                })
            }
        </StarInputList>
        <StarRegisterBtn onClick={handleStarSave}>평점등록</StarRegisterBtn>
    </StarBoxContainer>
}

const StarBoxContainer = styled.div`
    display: flex;
    gap: 25px;
`

const StarCount = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 8px;

    ${'span'} {
        font-size: 15px;
        font-weight: lighter;
    }
`

const StarInputList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;    
`

const StarRegisterBtn = styled.button`
    background-color: #C40062;
`