import "./Loading.css"

export function Loading() {
    return (
        <p className="scan-terminal loading">
            <span className="terminal-prompt">&gt;_</span>
            Loading
            <span className="terminal-cursor">|</span>
        </p>
    )
}