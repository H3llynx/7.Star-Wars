import { useEffect, useState } from "react";
import Hub from "../../assets/svg/hub-border.svg?react";
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
        <section className="starship-block">
            <Hub className="hub-border" />
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
    )
}