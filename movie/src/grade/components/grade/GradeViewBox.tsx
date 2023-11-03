import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { gradeList, selectedMovieInfo } from "../../../util/recoils/utilRecoil";

export default function GradeViewBox() {
    const gradeListData = useRecoilValue(gradeList);
    const movieInfo = useRecoilValue(selectedMovieInfo);
    const movieCd = movieInfo?.movieCd ?? "";

    const findGradeListData = gradeListData[movieCd] ?? {};

    
    
    const totalScore = findGradeListData.movieScoreList?.reduce((pv, cv)=> {
        return pv + cv.score;
    }, 0)
    
    
    const totalCount = (findGradeListData.movieScoreList?? []).length;
    const avgScore = isNaN(totalScore / totalCount) ? 0 : (totalScore / totalCount);


    return <GradeView>
        <h3>평점 : {avgScore.toFixed(2)}점</h3>
        <p>(총 투표인원 : {totalCount}명)</p>
    </GradeView>
}

const GradeView = styled.div`
    display: flex;
    gap: 10px;
    line-height: 0;

    ${'p'} {
        margin-top: 20px;
    }
`