import "../Auth.css";
import { FormButton } from "../components/FormButton/FormButton";
import { Input } from "../components/Input/Input";

export function Login() {

    return (
        <form>
            <h1 className="scan">Login</h1>
            <Input
                id="email"
                type="email"
                label="email"
            />
            <Input
                id="password"
                type="password"
                label="password"
            />
            <FormButton>
                Authenticate
            </FormButton>
        </form>
    )
}