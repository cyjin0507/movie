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

    
    return <Star onMouseOver={()=>handleStarControl(starNumber)}>{
        selectedStarInput >= starNumber ? '★' : '☆'
    }</Star>
}

const Star = styled.div`
    font-size: 30px;
`