import { getData } from "../../../services/api-services";
import type { Film, FilmInfo, Pilot, StarShip } from "../types/types";
import { StarShipResultsSchema, StarShipSchema } from "../types/zod-validation";
import { addFilmInfo, getId } from "./utils";

export const getShips = async (page: number): Promise<StarShip[]> => {
    const URL = `https://swapi.dev/api/starships/?page=${page}`;
    const data = await getData(URL);
    const validated = StarShipResultsSchema.parse(data).results;
    const ships = [];
    for (const ship of validated) {
        const pilots: Pilot[] = [];
        const films: Film[] = [];
        for (const pilot of ship.pilots) {
            const id = getId(pilot);
            const pilotObj: Pilot = {
                id: id,
                name: await getPilot(id),
                src: `pilots/${id}.webp`
            }
            pilots.push(pilotObj)
        };
        for (const film of ship.films) {
            const id = getId(film);
            const filmObj: Film = await addFilmInfo(id);
            films.push(filmObj);
        }
        const id = getId(ship.url);
        const src = `starships/${id}.webp`;
        const newShip = { ...ship, id, src, pilots, films };
        ships.push(newShip)
    }
    return ships;
};

export const getShipById = async (id: number): Promise<StarShip> => {
    const URL = `https://swapi.dev/api/starships/${id}`;
    const data = await getData(URL);
    const validated = StarShipSchema.parse(data);
    const pilots: Pilot[] = [];
    const films: Film[] = [];
    for (const pilot of validated.pilots) {
        const id = getId(pilot);
        const pilotObj: Pilot = {
            id: id,
            name: await getPilot(id),
            src: `pilots/${id}.webp`
        }
        pilots.push(pilotObj);
    }
    for (const film of validated.films) {
        const id = getId(film);
        const filmObj: Film = await addFilmInfo(id);
        films.push(filmObj);
    }
    const ship = {
        ...validated,
        id: getId(validated.url),
        src: `starships/${id}.webp`,
        pilots,
        films
    };
    return ship;
};

export const getPilot = async (id: string): Promise<string> => {
    const URL = `https://swapi.dev/api/people/${id}`;
    const data = await getData(URL);
    return data.name
};

export const getFilm = async (id: string): Promise<FilmInfo> => {
    const URL = `https://swapi.dev/api/films/${id}`;
    const data = await getData(URL);
    return ({
        title: data.title,
        episode: data.episode_id
    })
};