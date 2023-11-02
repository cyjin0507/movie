import styled from "styled-components";
import { keyPadInput } from "../../recoils/utilRecoil";
import { useRecoilState } from "recoil";

export default function KeypadBackSpace() {
    const [keypadInputData, setKeypadInput] = useRecoilState(keyPadInput);

    const keypadInputDelete = () => {
        setKeypadInput(keypadInputData.substring(0, keypadInputData.length-1));
    }

    return <Keypad onClick={keypadInputDelete}>⌫</Keypad>
}

const Keypad = styled.button`
    border-radius: 0px;
    height: 55px;
    border: 1px solid #4a4a4a;
`