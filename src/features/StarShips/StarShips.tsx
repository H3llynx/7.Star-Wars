import { useEffect, useState } from "react";
import Hud from "../../assets/svg/hud-border.svg?react";
import { SectionIntro } from "../../components/SectionIntro/SectionIntro";
import { getShips } from "./api/starships-service";
import { ShipCard } from "./components/ShipCard/ShipCard";
import "./StarShips.css";
import type { StarShip } from "./types";

export function StarShips() {
    const [ships, setShips] = useState<StarShip[]>([]);
    const [pages, setPages] = useState(0);

    useEffect(() => {
        const loadShips = async () => {
            const stored = localStorage.getItem("starships");
            if (stored && stored !== "undefined") {
                setShips(JSON.parse(stored));
            }
            else {
                const ships = await getShips(1);
                setShips(ships);
                localStorage.setItem("starships", JSON.stringify(ships));
                setPages(1);
            }
        }
        loadShips();
    }, []);



    return (
        <div className="centered">
            <SectionIntro title="Starship catalog" />
            <section className="hud">
                <Hud className="hud-border-svg mb-hidden" />
                <ul className="ship-list">
                    {ships.map(ship => {
                        return (
                            <li key={ship.id}>
                                <ShipCard
                                    {...ship} />
                            </li>
                        )
                    })}

                </ul>
            </section>
        </div>
    )
}