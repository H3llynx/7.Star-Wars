import { getData } from "../../../services/api-services";
import { StarShipResultsSchema, StarShipSchema } from "../types/zod-validation";
import { getShipId } from "./utils";

export const getShips = async (page: number) => {
    const URL = `https://swapi.dev/api/starships/?page=${page}`;
    const data = await getData(URL);
    const validated = StarShipResultsSchema.parse(data).results;

    const ships = validated.map((ship) => {
        const id = getShipId(ship.url);
        return {
            ...ship,
            id,
            src: `starships/${id}.webp`
        };
    });

    return ships;
};

export const getShipById = async (id: number) => {
    const URL = `https://swapi.dev/api/starships/${id}`;
    const data = await getData(URL);
    const validated = StarShipSchema.parse(data);
    const ship = {
        ...validated,
        id: getShipId(validated.url),
        src: `starships/${id}.webp`
    };
    return ship;
};
