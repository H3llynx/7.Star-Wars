import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import "../Auth.css";
import { registerUser } from "../AuthSlice";
import { AuthDialog } from '../components/AuthDialog/AuthDialog';
import { FormButton } from "../components/FormButton/FormButton";
import { Input } from "../components/Input/Input";
import { handleErrorMessage } from "../scripts/utils";

export function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dialogRef = useRef<HTMLDialogElement>(null);
    const dispatch = useAppDispatch();
    const { error } = useAppSelector(state => state.auth);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(registerUser({ name, email, password }));
    }

    useEffect(() => {
        if (error) {
            dialogRef.current?.showModal();
            setErrorMessage(handleErrorMessage(error));
        }
    }, [error])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1 className="scan">Register</h1>
                <Input
                    id="name"
                    type="text"
                    label="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    id="email"
                    type="email"
                    label="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    id="password"
                    type="password"
                    label="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormButton>
                    Register
                </FormButton>
            </form>

            <AuthDialog
                ref={dialogRef}
                close={() => dialogRef.current?.close()}>
                {errorMessage}
            </AuthDialog>
        </>
    )
}