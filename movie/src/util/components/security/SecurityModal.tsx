import Modal from "../Modal";
import KeypadBox from "../keypad/KeypadBox";
import SecurityInput from "./SecurityInput";
import { useMemo } from "react";

export default function SecurityModal(
    {
        isOpen,
        handleOnClose,
        sendEvent,
    } : {
        isOpen : boolean;
        handleOnClose : (bool : boolean)=> void;
        sendEvent : ()=> void;
    }
) {
    const answerCode = useMemo(()=>{return Math.floor(Math.random() * 10000000000)}, [isOpen]);
    
    return <Modal isOpen={isOpen} handleOnClose={() => handleOnClose(false)}>
        <SecurityInput answerCode={answerCode.toString()} />
        <KeypadBox sendEvent={sendEvent} answerCode={answerCode.toString()} />
    </Modal>
}