import styled from "styled-components"
import TheatorArea from "./TheatorArea"

export default function Theator() {
    
    return <TheatorBox>
        <Screen>Screen</Screen>
        <TheatorArea />
    </TheatorBox>
}

const TheatorBox = styled.div`
    width: 700px;
    height: 650px;
    background-color: #333;
    border: 1px solid #4e4e4e;
    border-radius: 5px;
    padding: 30px;
`

const Screen = styled.div`
    width: 400px;
    height: 45px;
    margin: auto;
    background-color: #4e4e4e;
    border-radius: 5px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

