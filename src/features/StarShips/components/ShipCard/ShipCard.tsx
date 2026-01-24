import type { StarShip } from "../../types"
import "./ShipCard.css"

export function ShipCard(ship: StarShip) {
    return (
        <article className="hud-card">
            <div className="hud-frame">
                <img src={ship.src} className="ship-img" alt="" />
                <div className="title-container">
                    <h3>{ship.name}</h3>
                    <span className="speed">MAX ATMO VELOCITY: {ship.max_atmosphering_speed}</span>
                </div>
                <div className="stats-container">
                    <div className="stat">
                        <span className="label">Model</span>
                        <span className="value">{ship.model}</span>
                    </div>
                    <div className="stat">
                        <span className="label">Class</span>
                        <span className="value">{ship.starship_class}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}