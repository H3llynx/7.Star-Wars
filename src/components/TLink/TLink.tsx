import type { ReactNode } from "react";
import type { LinkProps } from 'react-router';
import { Link } from "react-router";
import "./TLink.css";

type TLink = {
    children: ReactNode;
} & LinkProps

export function TLink({ to, children }: TLink) {
    return (
        <Link
            to={to}
            className="link terminal"
        >
            <span className="terminal-prompt" aria-hidden="true">&gt;_</span>
            {children}
            <span className="terminal-cursor" aria-hidden="true">|</span>
        </Link>
    )
}