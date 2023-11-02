import styled from "styled-components";
import KeypadButton from "./KeyPadButton";
import KeyPadEnterKey from "./KeyPadEnterKey";
import KeypadBackSpace from "./KeypadBackSpace";

export default function KeypadBox(
    {
        sendEvent,
        answerCode,
    } : {
        sendEvent : ()=> void;
        answerCode : string;
    }
) {
    const keyArr = insertBlockKey(makeRandomArr());
        
    return <KeypadContainer>
        {
            keyArr.map((key, n) => {
                return <KeypadButton keyNumber={key.toString()} key={n} />
            })
        }

        <KeypadBackSpace />
        <KeyPadEnterKey sendEvent={sendEvent} answerCode={answerCode} />
    </KeypadContainer>
}

const KeypadContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 3fr);
    box-sizing: border-box;
    margin-top: 20px;
`

// 일단 랜덤 0 ~ 9 까지 숫자 배열을 만듦
function makeRandomArr(length=10) {
    let randomArr: number[] = [];

    for(let i=0; i<length; i++) {
        let randomNum = Math.floor(Math.random() * length);
        if(!randomArr.includes(randomNum)) {
            randomArr.push(randomNum);
        } else {
            i--;
        }
    }

    return randomArr;
}

// 만든 배열 사이의 block문자를 넣음
function insertBlockKey(arr : number[], blockCount = 3) {
    for(let i=0; i<blockCount; i++) {
        let randomNum = Math.floor(Math.random() * arr.length);
        arr.splice(randomNum, 0, -1);
    }

    return arr;
}