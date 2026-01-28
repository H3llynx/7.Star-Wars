import { forwardRef, type ReactNode } from "react";
import Error from "../../../../assets/svg/error2.svg?react";
import "./AuthDialog.css";

type Dialog = {
    children: ReactNode;
    close: () => void;
}

export const AuthDialog = forwardRef<HTMLDialogElement, Dialog>(({ close, children }, ref) => {
    return (
        <dialog ref={ref}>
            <button
                className="close-btn"
                onClick={close} aria-label="Close">
                ✕
            </button>
            <Error aria-hidden="true" />
            <p>{children}</p>
        </dialog>
    )
})