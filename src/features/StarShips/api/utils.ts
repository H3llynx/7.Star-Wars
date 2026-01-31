import type { Film } from "../types/types";
import { getFilm } from "./starships-service";

export const getId = (url: string): string => {
    return url.split("/").slice(-2, -1)[0];
};

export const addFilmInfo = async (id: string) => {
    const film = await getFilm(id);
    const filmObj: Film = {
        id: id,
        title: film.title,
        episode: film.episode,
        src: `films/${film.episode}.jpg`
    };
    return filmObj;
};