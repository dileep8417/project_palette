import { useSelector } from "react-redux";

const Message = ({ message }) => {
    const showColorCopiedMsg = useSelector(state => state.colorPalette.showColorCopiedMsg);
    const selectedColor = useSelector(state => state.colorPalette.selectedColor);

    return (
        <div>
            <div className="message_card">{message}</div>
            {
                showColorCopiedMsg && (
                    <div>
                        <div className="copied_text_msg_wrapper"></div>
                        <div className="copied_text_msg">
                            Copied!
                            <br />
                            <span className="copied_color">{selectedColor}</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Message;