import styled from "styled-components";
import MovieIntroMenu from "./components/MovieIntroMenu";
import MovieIntroVideoBox from "./components/MovieIntroVideoBox";
import { useState } from "react";
import SecurityModal from "../util/components/security/SecurityModal";
import { appViewAtom } from "../util/recoil";
import { useSetRecoilState } from "recoil";
import { APP_VIEW } from "../constants";
import MovieInfo from "./components/MovieInfo";

export default function MovieIntroView() {
    const [isSecurityModal, setIsSecurityModal] = useState(false);
    const setAppView = useSetRecoilState(appViewAtom);

    const handleMoveReservationPage = () => {
        setAppView(APP_VIEW.movieReservation);
        setIsSecurityModal(false);
    }

    return <>
        <MovieIntroContainer>
            <div>
                <MovieIntroVideoBox />
                <MovieIntroMenu
                    setIsSecurityModal={setIsSecurityModal}
                />
            </div>
            <MovieInfo />
        </MovieIntroContainer>
        <SecurityModal isOpen={isSecurityModal} handleOnClose={setIsSecurityModal} sendEvent={handleMoveReservationPage} />
    </>
}

const MovieIntroContainer = styled.div`
    width: 1400px;
    margin: auto;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
`