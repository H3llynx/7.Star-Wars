import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { Loading } from "../../../../components/Loading/Loading";
import "../../Auth.css";
import { registerUser } from "../../AuthSlice";
import { FormButton } from "../FormButton/FormButton";
import { GoogleButton } from "../GoogleButton/GoogleButton";
import { Input } from "../Input/Input";
import { SwitchFormButton } from "../SwitchFormButton/SwitchFormButton";

export function Register({ onClick }: { onClick: () => void }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    const { error, loading } = useAppSelector(state => state.auth);

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        dispatch(registerUser({ name, email, password }));
    }

    useEffect(() => {
        if (error) {
            setPassword("");
        }
    }, [error])

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="scan">Register</h1>
            {loading && <Loading />}
            {!loading &&
                <>
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
                    <div className="button-group">
                        <FormButton>
                            Register
                        </FormButton>
                        <GoogleButton />
                        <SwitchFormButton onClick={onClick}>
                            ALREADY REGISTERED?
                        </SwitchFormButton>
                    </div>
                </>
            }
        </form>
    )
}