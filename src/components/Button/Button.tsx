import type { ReactNode } from "react";

type Button = {
    children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, onClick }: Button) {
    return (
        <button
            className="cta terminal"
            tabIndex={0}
            onClick={onClick}
        >
            <span className="terminal-prompt" aria-hidden="true">&gt;_</span>
            {children}
            <span className="terminal-cursor" aria-hidden="true">|</span>
        </button>
    )
}