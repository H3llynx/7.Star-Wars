import { getData } from "../../../services/api-services";
import { StarShipResultsSchema } from "../types/zod-validation";
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

