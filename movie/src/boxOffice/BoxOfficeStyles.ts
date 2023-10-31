import styled from "styled-components"

export const BoxOfficeItemContainer = styled.div`
    width: 160px;
    height: 200px;
    background-color: white;
    border-radius: 5px;
    position: relative;

    ${'img'} {
        border-radius: 5px;
    }
`

export const Rank = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    font-size: 45px;
    font-weight: bold;
    color: rgb(251,194,044);
`

export const BoxOfficeItemIntroduce = styled.div`
    position: absolute;
    bottom: 0;
    background-color: rgba(0,0,0,.6);
    width: 100%;
    height: 0px;
    overflow: hidden;
    transition: all .5s;

    ${BoxOfficeItemContainer}:hover & {
        height: 100px;
    }

    ${'p'} {
        font-size: 13px;
    }
`