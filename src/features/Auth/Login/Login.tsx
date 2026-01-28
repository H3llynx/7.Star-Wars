import Hud from "../../../assets/svg/hud-border.svg?react";
import { FormButton } from "../components/FormButton/FormButton";
import { Input } from "../components/Input/Input";
import "../styles/auth.css";

export function Login() {
    return (
        <div className="centered">
            <section className="hud">
                <Hud className="hud-border-svg mb-hidden" aria-hidden="true" />
                <form>
                    <h1 className="scan">Login</h1>
                    <Input
                        id="email"
                        type="email"
                        label="email address"
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
            </section>
        </div>
    )
}