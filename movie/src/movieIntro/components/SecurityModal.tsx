import { useSetRecoilState } from "recoil";
import Modal from "../../util/components/Modal";
import { appViewAtom } from "../../util/recoils/utilRecoil";
import { APP_VIEW } from "../../constants";

export default function SecurityModal(
    {
        isOpen,
        handleOnClose,
    } : {
        isOpen : boolean;
        handleOnClose : (bool : boolean)=> void;
    }
) {
    const setAppView = useSetRecoilState(appViewAtom);

    const handleMoveReservationPage = () => {
        setAppView(APP_VIEW.movieReservation);
        handleOnClose(false);
    }

    return <Modal isOpen={isOpen} handleOnClose={() => handleOnClose(false)}>
        자동입력방지 넣을 예정
        <button onClick={handleMoveReservationPage}>완료</button>
    </Modal>
}