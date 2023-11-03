import styled from "styled-components";

export default function StarInput(
    {
        starNumber,
        handleStarControl,
        selectedStarInput,
    } : {
        starNumber : number;
        handleStarControl : (starNumbers:number)=>void;
        selectedStarInput: number;
    }
) {
    const fillStar = '★';
    const emptyStar = '☆';
    
    return <Star onMouseOver={()=>handleStarControl(starNumber)}>{
        selectedStarInput >= starNumber ? fillStar : emptyStar
    }</Star>
}

const Star = styled.div`
    font-size: 30px;
`