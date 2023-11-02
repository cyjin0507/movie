import styled from "styled-components";
import MovieInfo from "./components/MovieInfo";
import MovieIntroVideoBox from "./components/MovieIntroVideoBox";
import { useState } from "react";
import SecurityModal from "../util/components/security/SecurityModal";
import { appViewAtom } from "../util/recoils/utilRecoil";
import { useSetRecoilState } from "recoil";
import { APP_VIEW } from "../constants";

export default function MovieIntroView() {
    const [isSecurityModal, setIsSecurityModal] = useState(false);
    const setAppView = useSetRecoilState(appViewAtom);

    const handleMoveReservationPage = () => {
        setAppView(APP_VIEW.movieReservation);
        setIsSecurityModal(false);
    }

    return <>
        <MovieIntroContainer>
            <MovieIntroVideoBox />
            <MovieInfo 
                setIsSecurityModal={setIsSecurityModal}
            />
        </MovieIntroContainer>
        <SecurityModal isOpen={isSecurityModal} handleOnClose={setIsSecurityModal} sendEvent={handleMoveReservationPage} />
    </>
}

const MovieIntroContainer = styled.div`
    width: 1200px;
    margin: auto;
    margin-top: 60px;
`