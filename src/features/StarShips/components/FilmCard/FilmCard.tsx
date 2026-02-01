import Placeholder from "../../../../assets/svg/film-placeholder.svg";
import type { Film } from "../../types/types";
import "./FilmCard.css";

export function FilmCard(film: Film) {
    return (
        <div className="film-card" tabIndex={0}>
            <span className="episode-badge">
                EP. {film.episode}
            </span>
            <div className="film-poster">
                <img src={film.src} alt={film.title}
                    onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = Placeholder;
                    }} />
            </div>
            <div className="film-info">
                <span className="film-status">ARCHIVED</span>
                <p className="film-title">{film.title}</p>
            </div>
        </div>
    );
}