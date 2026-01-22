import Ship from "../../assets/ship.png"
import type { StarShip } from "../../types"
import "./ShipCard.css"

export function ShipCard(ship: StarShip) {
    return (
        <div className="hud-card">
            <div className="hud-frame top-flex">
                <div className="ship-img-container">
                    <img src={Ship} className="ship-img" />
                </div>
                <div className="text-area">
                    <h2>{ship.name}</h2>
                    <span className="speed">Max atmosphering speed: {ship.max_atmosphering_speed}</span>
                    <div className="ship-stats">
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
            </div>
        </div>
    )
}