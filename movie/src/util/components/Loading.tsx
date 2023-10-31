import styled from "styled-components"

export default function Loading() {

    return <LoadingContainer>
        <LoadingDot></LoadingDot>
        <LoadingDot></LoadingDot>
        <LoadingDot></LoadingDot>
    </LoadingContainer>
}

const LoadingContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const LoadingDot = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: aqua;
    @keyframes loadingAnimation {
        0% {
            margin-top: 0;
        }
        33.33% {
            margin-top: -50px;
        }
        66.66% {
            margin-top: 50px;
        }
        100% {
            margin-top: 0;
        }
    }
    animation: loadingAnimation 1s linear infinite;

    &:nth-child(2) {
        animation-delay: .3s;
    }

    &:nth-child(3) {
        animation-delay: .6s;
    }
`