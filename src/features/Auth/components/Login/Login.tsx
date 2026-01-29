import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import "../../Auth.css";
import { loginUser, logWithGoogle } from "../../AuthSlice";
import { FormButton } from "../FormButton/FormButton";
import { Input } from "../Input/Input";
import { SwitchFormButton } from "../SwitchFormButton/SwitchFormButton";

export function Login({ onClick }: { onClick: () => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    const { error } = useAppSelector(state => state.auth);

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    }

    const handleGoogle = async () => {
        dispatch(logWithGoogle());
    }

    useEffect(() => {
        if (error) {
            setPassword("");
        }
    }, [error])

    return (
        <>
            <form onSubmit={handleSubmit}>
                < h1 className="scan" > Login</h1 >
                <Input
                    id="email"
                    type="email"
                    label="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    id="password"
                    type="password"
                    label="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="button-group">
                    <FormButton
                        type="submit">
                        Authenticate
                    </FormButton>
                    <SwitchFormButton onClick={onClick}>
                        No account?
                    </SwitchFormButton>
                </div>
            </form >
            <button type="button" onClick={handleGoogle}>Log in with Google</button>
        </>
    )
}