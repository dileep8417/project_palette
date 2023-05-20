import "../styles/Modal.css";
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/modals/modalSlice";
import { useEffect } from 'react';
import { RxCross2 } from "react-icons/rx"

const Modal = ({ title, value, placeholder, btnVal, submitAction }) => {
    
    const inputFieldRef = useRef('');
    const dispatch = useDispatch();
    const errMsg = useSelector(state => state.colorPalette.errMsg);

    function submitClickHandler() {
        const data = {
            fieldValue: inputFieldRef.current.value,
            success: false,
        }
        dispatch(submitAction(data));
        inputFieldRef.current.value = '';
    }

    function closeModalHandler() {
        dispatch(closeModal());
    }

    useEffect(function() {
        inputFieldRef.current.value = value || '';
    }, [value]);

    return (
        <div>
            <div className="modal_wrapper" onClick={closeModalHandler}></div>
            <div className="modal">
                <div className="modal_header">
                    {title} <span className="close" onClick={closeModalHandler}><RxCross2 /></span>
                </div>
                <div className="modal_body">
                    {errMsg !== '' && <div className="error_msg">{errMsg}</div>}
                    <input type="text" ref={inputFieldRef} placeholder={placeholder} onKeyDown={(e) => e.key === 'Enter' && submitClickHandler()} /><br />
                    <button onClick={submitClickHandler}>{btnVal}</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;