import type { Film } from "../../types/types";
import "./FilmCard.css";

export function FilmCard({ film }: { film: Film }) {
    return (
        <div className="film-card">
            <span className="episode-badge">
                EP. {film.episode}
            </span>
            <div className="film-poster">
                <img src={film.src} alt={film.title} />
            </div>
            <div className="film-info">
                <span className="film-status">ARCHIVED</span>
                <p className="film-title">{film.title}</p>
            </div>
        </div>
    );
}