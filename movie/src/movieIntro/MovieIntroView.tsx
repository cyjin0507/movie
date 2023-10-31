import styled from "styled-components";
import MovieInfo from "./components/MovieInfo";
import MovieIntroVideoBox from "./components/MovieIntroVideoBox";
import { useState } from "react";
import SecurityModal from "./components/SecurityModal";

export default function MovieIntroView() {
    const [isSecurityModal, setIsSecurityModal] = useState(false);

    return <>
        <MovieIntroContainer>
            <MovieIntroVideoBox />
            <MovieInfo 
                setIsSecurityModal={setIsSecurityModal}
            />
        </MovieIntroContainer>
        <SecurityModal isOpen={isSecurityModal} handleOnClose={setIsSecurityModal} />
    </>
}

const MovieIntroContainer = styled.div`
    width: 1200px;
    margin: auto;
    margin-top: 60px;
`