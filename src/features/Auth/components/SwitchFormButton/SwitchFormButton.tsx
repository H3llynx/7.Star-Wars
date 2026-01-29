import type { Button } from "../../types/types";

export function SwitchFormButton({ children, onClick }: Button) {
    return (
        <button
            className="auth-cta"
            tabIndex={0}
            type="button"
            onClick={onClick}
        >
            <span className="terminal-prompt" aria-hidden="true">&gt;_</span>
            {children}
        </button>
    )
}