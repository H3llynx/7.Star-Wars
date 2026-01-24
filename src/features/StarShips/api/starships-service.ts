import { getData } from "../../../services/api-services";
import type { StarShip } from "../types";
import { getShipId } from "./utils";

export const getShips = async (page: number) => {
    const URL = `https://swapi.dev/api/starships/?page=${page}`;
    const data = await getData(URL);
    const ships = data.results;
    ships.forEach((ship: StarShip) => {
        ship.id = getShipId(ship.url);
        ship.starship_class = ship.starship_class.toLowerCase();
    })
    return ships;
};

