import { useEffect, useState } from "react";
import Hud from "../../assets/svg/hud-border.svg?react";
import { SectionIntro } from "../../components/SectionIntro/SectionIntro";
import { getShips } from "./api/starships-service";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { ShipCard } from "./components/ShipCard/ShipCard";
import "./StarShips.css";
import type { StarShip } from "./types/types";

export function StarShips() {
    const [ships, setShips] = useState<StarShip[]>([]);
    const [pages, setPages] = useState(1);

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
            }
        }
        loadShips();
    }, []);

    const loadMoreShips = async () => {
        const moreShips = await getShips(pages + 1);
        const newShips = [...ships, ...moreShips];
        setShips(newShips);
        setPages(pages + 1);
    }

    return (
        <div className="centered">
            <SectionIntro title="Starship catalog" />
            <section className="hud">
                <Hud className="hud-border-svg mb-hidden" />
                <div className="ship-list">
                    <ul>
                        {ships.map(ship => {
                            return (
                                <li key={ship.id}>
                                    <ShipCard
                                        {...ship} />
                                </li>
                            )
                        })}
                    </ul>
                    {pages < 4 && <LoadMoreBtn
                        item="starships"
                        onClick={loadMoreShips}
                    />}
                </div>
            </section>
        </div>
    )
}