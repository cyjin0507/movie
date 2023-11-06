import { useRecoilState } from "recoil";
import styled from "styled-components"
import { keyPadInput } from "../../recoil";

export default function KeyPadEnterKey(
    {
        sendEvent,
        answerCode,
    } : {
        sendEvent : () => void;
        answerCode : string;
    }
) {
    const [keypadInputData, setKeypadInputData] = useRecoilState(keyPadInput);

    const handleEneterKey = () => {
        if(keypadInputData === answerCode) {
            sendEvent();
            setKeypadInputData("");
        } else {
            alert("보안문자 입력이 틀렸습니다.");
        }
    }
    
    return <Keypad onClick={handleEneterKey}>⏎</Keypad>
}


const Keypad = styled.button`
    border-radius: 0px;
    height: 55px;
    border: 1px solid #4a4a4a;
`