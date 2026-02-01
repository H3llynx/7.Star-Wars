import Placeholder from "../../../../assets/svg/pilot-placeholder.svg";
import type { Pilot } from "../../types/types";
import "./PilotCard.css";

export function PilotCard(pilot: Pilot) {
    return (
        <div className="pilot-card" tabIndex={0}>
            <div className="pilot-avatar">
                <img src={pilot.src} alt={""}
                    onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = Placeholder;
                    }} />
            </div>
            <p className="pilot-name">{pilot.name}</p>
        </div>
    );
}