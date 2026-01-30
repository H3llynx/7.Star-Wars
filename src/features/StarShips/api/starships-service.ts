import { getData } from "../../../services/api-services";
import type { Pilot, StarShip } from "../types/types";
import { StarShipResultsSchema, StarShipSchema } from "../types/zod-validation";
import { getPilotId, getShipId } from "./utils";

export const getShips = async (page: number): Promise<StarShip[]> => {
    const URL = `https://swapi.dev/api/starships/?page=${page}`;
    const data = await getData(URL);
    const validated = StarShipResultsSchema.parse(data).results;
    const ships = [];
    for (const ship of validated) {
        const pilots = [];
        for (const pilot of ship.pilots) {
            const id = getPilotId(pilot);
            const pilotObj: Pilot = {
                id: id,
                name: await getPilot(id),
                src: `pilots/${id}.webp`
            }
            pilots.push(pilotObj)
        }
        const id = getShipId(ship.url);
        const src = `starships/${id}.webp`;
        const newShip = { ...ship, id, src, pilots };
        ships.push(newShip)
    }
    return ships;
};

export const getShipById = async (id: number): Promise<StarShip> => {
    const URL = `https://swapi.dev/api/starships/${id}`;
    const data = await getData(URL);
    const validated = StarShipSchema.parse(data);
    const pilots: Pilot[] = [];
    for (const pilot of validated.pilots) {
        const id = getPilotId(pilot);
        const pilotObj: Pilot = {
            id: id,
            name: await getPilot(id),
            src: `pilots/${id}.webp`
        }
        pilots.push(pilotObj)
    }
    const ship = {
        ...validated,
        id: getShipId(validated.url),
        src: `starships/${id}.webp`,
        pilots
    };
    return ship;
};

export const getPilot = async (id: string): Promise<string> => {
    const URL = `https://swapi.dev/api/people/${id}`;
    const data = await getData(URL);
    return data.name
}