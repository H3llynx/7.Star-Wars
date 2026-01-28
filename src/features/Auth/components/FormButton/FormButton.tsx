import type { ReactNode } from "react";
import "./FormButton.css";

export function FormButton({ children }: { children: ReactNode }) {
    return (
        <button
            className="terminal-cta"
            tabIndex={0}
            type="submit"
        >
            <span className="terminal-prompt" aria-hidden="true">&gt;_</span>
            {children}
            <span className="terminal-cursor" aria-hidden="true">|</span>
        </button>
    )
}