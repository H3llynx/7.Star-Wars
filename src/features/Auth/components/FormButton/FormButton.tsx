import type { Button } from "../../types/types";

export function FormButton({ children }: Button) {
    return (
        <button
            className="auth-cta"
            tabIndex={0}
            type="submit"
        >
            <span className="terminal-prompt" aria-hidden="true">&gt;_</span>
            {children}
            <span className="button-status" aria-hidden="true">[ READY ]</span>
        </button>
    )
}