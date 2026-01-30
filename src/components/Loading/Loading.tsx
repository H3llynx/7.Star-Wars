import "./Loading.css";

export function Loading() {
    return (
        <div className="loading-container">
            <div className="loading-spinner">
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
            </div>
            <p className="loading-text">
                <span className="terminal-prompt">&gt;_</span>
                LOADING SYSTEM
            </p>
        </div>
    );
}