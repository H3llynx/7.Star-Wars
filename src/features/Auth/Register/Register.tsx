import Hud from "../../../assets/svg/hud-border.svg?react";
import { FormButton } from "../components/FormButton/FormButton";
import { Input } from "../components/Input/Input";
import "../styles/auth.css";

export function Register() {
    return (
        <div className="centered">
            <section className="hud">
                <Hud className="hud-border-svg mb-hidden" aria-hidden="true" />
                <form>
                    <h1 className="scan">Register</h1>
                    <Input
                        id="name"
                        type="text"
                        label="name"
                    />
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
                        Register
                    </FormButton>
                </form>
            </section>
        </div>
    )
}