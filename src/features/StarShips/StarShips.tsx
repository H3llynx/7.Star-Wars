import { useEffect, useState } from "react";
import Hud from "../../assets/svg/hud-border.svg?react";
import { SectionIntro } from "../../components/SectionIntro/SectionIntro";
import { getData } from "./api/api-service";
import { ShipCard } from "./components/ShipCard/ShipCard";
import "./StarShips.css";
import type { StarShip } from "./types";

export function StarShips() {
    const [ships, setShips] = useState<StarShip[]>([])
    useEffect(() => {
        const fetchShips = async () => {
            const URL = "https://swapi.dev/api/starships/?page=1";
            const data = await getData(URL);
            setShips(data.results);
        }
        fetchShips();
    }, []);
    const getShipId = (url: string): string => {
        return url.split('/').slice(-2, -1)[0];
    }
    return (
        <div className="centered">
            <SectionIntro title="Starship catalog" />
            <section className="hud">
                <Hud className="hud-border-svg mb-hidden" />
                <article className="ship-list">
                    {ships.map(ship => {
                        return (
                            <ShipCard
                                key={getShipId(ship.url)}
                                {...ship} />
                        )
                    })}
                </article>
            </section>
        </div>
    )
}