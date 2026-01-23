import "./HudOverlay.css";

export function HudOverlay() {
    return (
        <div className="hud-overlay">
            <div className="hud-top">
                <span>HUD FRAME · A7</span>
                <span>SYSTEM · NOMINAL</span>
            </div>

            <div className="hud-bottom">
                <span>SECTOR 03</span>

                <span className="sync">
                    SYNC
                </span>
            </div>
        </div>
    );
}
