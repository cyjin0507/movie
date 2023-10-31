import React, {ReactNode} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";

export default function Modal(
    {
        style,
        children,
        isOpen,
        handleOnClose,
    }: {
        style?: React.CSSProperties;
        children: ReactNode;
        isOpen: boolean;
        handleOnClose: () => void;
    }
) {
    const overlay = document.getElementById("modal");

    return <>
        {overlay && createPortal(
            <Background $isOpen={isOpen} onClick={handleOnClose}>
                <ModalDIV style={style} onClick={(e) => e.stopPropagation()}>
                    {children}
                </ModalDIV>
            </Background>
            ,
            overlay
        )}
    </>;

}


const Background = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: rgba(113, 113, 113, 0.6);
  position: fixed;
  opacity: ${(props) => props.$isOpen ? 1 : 0};
  top: 0;
  pointer-events: ${(props) => props.$isOpen ? 'all' : 'none'};
  transition: .5s;
  left: 0;
`;
const ModalDIV = styled.div`
  width: 450px;
  max-width: calc(100% - 40px);
  height: 300px;
  background-color: #242424;
  border-radius: 10px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`