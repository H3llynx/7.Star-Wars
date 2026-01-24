import type { LoadMoreBtnProps } from "../../types";
import "./LoadMoreBtn.css";

export function LoadMoreBtn({ item, onClick }: LoadMoreBtnProps) {
    return (
        <button
            className="load-more-btn"
            tabIndex={0}
            onClick={onClick}
        >
            <span className="terminal-prompt">&gt;_</span>
            Load more {item}
            <span className="terminal-cursor">|</span>
        </button>
    )
}