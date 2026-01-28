import { HudSection } from "../../components/HudSection/HudSection";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

export function Auth() {
    return (
        <HudSection title="Authentication">
            <div className="auth-grid scroll">
                <Login />
                <Register />
            </div>
        </HudSection>
    )
}