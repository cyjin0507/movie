import styled from "styled-components";
import { VIDEO_URL } from "../../constants";

export default function MovieIntroVideoBox() {

    return <MovieIntroVideo>
        <video src={VIDEO_URL} autoPlay={true}></video>
    </MovieIntroVideo>
}

const MovieIntroVideo = styled.div`
    width: 900px;

    ${'video'} {
        width: 100%;
        height: 100%;
    }
`