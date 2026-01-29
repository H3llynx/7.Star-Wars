import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { HudSection } from "../../components/HudSection/HudSection";
import "./Auth.css";
import { AuthDialog } from "./components/AuthDialog/AuthDialog";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { handleErrorMessage } from "./scripts/utils";

export function Auth() {

    const [errorMessage, setErrorMessage] = useState("");
    const { user, error } = useAppSelector(state => state.auth);
    const navigate = useNavigate();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [hasAccount, setHasAccount] = useState(true);

    useEffect(() => {
        if (user) {
            navigate("/starships", { replace: true });
        }
    }, [user, navigate]);

    useEffect(() => {
        if (error) {
            dialogRef.current?.showModal();
            setErrorMessage(handleErrorMessage(error));
        }
    }, [error])

    return (
        <>
            <div className="overlay" />
            <HudSection title="Authentication">
                <div className="auth-container scroll">
                    {hasAccount && <Login onClick={() => setHasAccount(false)} />}
                    {!hasAccount && <Register onClick={() => setHasAccount(true)} />}
                </div>
            </HudSection>
            <AuthDialog
                ref={dialogRef}
                close={() => dialogRef.current?.close()}>
                {errorMessage}
            </AuthDialog>
        </>
    )
}