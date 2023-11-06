import styled from "styled-components"
import { keyPadInput } from "../../recoil"
import { useRecoilState } from "recoil";

export default function KeypadButton(
    {
        keyNumber,
    } : {
        keyNumber : string
    }
) {
    const [keypadInputData, setKeypadInput] = useRecoilState(keyPadInput);

    const saveKeypadInput = () => {
        setKeypadInput(keypadInputData + (keyNumber === "-1" ? "" : keyNumber));
    }

    return <Keypad onClick={saveKeypadInput}>{keyNumber === "-1" ? '-' : keyNumber}</Keypad>
}

const Keypad = styled.button`
    border-radius: 0px;
    height: 55px;
    border: 1px solid #4a4a4a;
`