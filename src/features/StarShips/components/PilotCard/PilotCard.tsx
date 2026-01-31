import type { Pilot } from "../../types/types";
import "./PilotCard.css";

export function PilotCard({ pilot }: { pilot: Pilot }) {
    return (
        <div className="pilot-card">
            <div className="pilot-avatar">
                <img src={pilot.src} alt={""}
                    onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "jarjar.png";
                    }} />
            </div>
            <p className="pilot-name">{pilot.name}</p>
        </div>
    );
}