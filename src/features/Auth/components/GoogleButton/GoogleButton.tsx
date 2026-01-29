import { useAppDispatch } from "../../../../app/hooks";
import GoogleSvg from "../../../../assets/svg/google.svg?react";
import { logWithGoogle } from "../../AuthSlice";
import "./GoogleButton.css";

export const GoogleButton = () => {
    const dispatch = useAppDispatch();
    const handleGoogle = async () => {
        dispatch(logWithGoogle());
    }

    return (
        <button
            type="button"
            onClick={handleGoogle}
            tabIndex={0}
            className="auth-cta google-btn"
        >
            <span className="terminal-prompt" aria-hidden="true">&gt;_</span>
            <GoogleSvg className="google-terminal-icon" />
            <span>Auth via Google</span>
            <span className="button-status" aria-hidden="true">[ OK ]</span>
        </button>
    );
};