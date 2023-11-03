import styled from "styled-components"
import StarInput from "./StarInput"
import { useState } from "react";

export default function StarBox() {
    const [selectedStarInput, setSelectedStarInput] = useState(-1);

    const handleStarControl = (starNumber: number) => {
        setSelectedStarInput(starNumber);
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