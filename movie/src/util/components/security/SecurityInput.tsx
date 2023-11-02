import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { keyPadInput } from "../../recoils/utilRecoil";

export default function SecurityInput(
    {
        answerCode,        
    } : {
        answerCode : string;
    }
) {
    const keyPadInputData = useRecoilValue(keyPadInput);

    return <SecurityInputContainer>
        <AnswerCode>
            입력해야할 숫자 : <span>{answerCode}</span>
        </AnswerCode>
        <UserInputArea>
            {keyPadInputData}
        </UserInputArea>
    </SecurityInputContainer>
}

const SecurityInputContainer = styled.div`
    margin-top: 15px;
`

const UserInputArea = styled.div`
    width: 100%;
    background-color: #333;
    padding: 10px 20px;
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
`

const AnswerCode = styled.div`
    padding: 10px;

    ${'span'} {
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 3px;
    }
`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  