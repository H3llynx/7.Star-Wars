import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { useAppDispatch, useAppSelector, useScreen } from '../../../../app/hooks';
import { ErrorImg } from '../../../../components/ErrorImg/ErrorImg';
import { HudSection } from '../../../../components/HudSection/HudSection';
import { Loading } from '../../../../components/Loading/Loading';
import { fetchShipById } from '../../StarShipsSlice';
import type { StarShip } from '../../types/types';
import { FilmCard } from '../FilmCard/FilmCard';
import { PilotCard } from '../PilotCard/PilotCard';
import "./ShipView.css";

export function ShipView() {
    const dispatch = useAppDispatch();
    const { selectedShip, selectedShipLoading, error } = useAppSelector(
        (state) => state.starships
    );
    const location = useLocation();
    const ship: StarShip = location.state?.ship || selectedShip;

    const { id } = useParams<{ id: string }>();
    const shipId = Number(id);

    const { isPortrait } = useScreen();

    useEffect(() => {
        if (!ship) {
            dispatch(fetchShipById(shipId))
        };
    }, [ship, dispatch, shipId])


    let title: string = "";
    if (ship) {
        title = ship.name
    } else if (error) {
        title = "Ooops... this is akward"
    }

    return (
        <>
            {isPortrait && <div className="overlay" />}
            <HudSection title={title}>
                {selectedShipLoading && <Loading />}
                {error && <ErrorImg />}
                {!error && ship &&
                    <article>
                        <img src={ship.src} className="ship-hologram" />
                        <div className="ship-info scroll">
                            <div className="ship-name">
                                <h1>{ship.name}</h1>
                                <p className="ship-subtitle">{ship.manufacturer}</p>
                            </div>

                            <div className="hud-section">
                                <h2>IDENTITY</h2>
                                <div className="hud-grid">
                                    <div className="row">
                                        <span className="label">Model</span>
                                        <span className="value">{ship.model}</span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Class</span>
                                        <span className="value">{ship.starship_class}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hud-section">
                                <h2>PERFORMANCE</h2>
                                <div className="hud-grid-3">
                                    <div className="col">
                                        <span className="label">Atmospheric Speed</span>
                                        <span className="value">{ship.max_atmosphering_speed}</span>
                                    </div>
                                    <div className="col">
                                        <span className="label">Hyperdrive</span>
                                        <span className="value">{ship.hyperdrive_rating}</span>
                                    </div>
                                    <div className="col">
                                        <span className="label">MGLT</span>
                                        <span className="value">{ship.MGLT}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hud-section">
                                <h2>CAPACITY</h2>
                                <div className="hud-grid-3">
                                    <div className="col">
                                        <span className="label">Crew</span>
                                        <span className="value">{ship.crew}</span>
                                    </div>
                                    <div className="col">
                                        <span className="label">Passengers</span>
                                        <span className="value">{ship.passengers}</span>
                                    </div>
                                    <div className="col">
                                        <span className="label">Cargo capacity</span>
                                        <span className="value">{ship.cargo_capacity}</span>
                                    </div>
                                </div>
                            </div>
                            {ship.pilots.length > 0 &&
                                <div className="hud-section">
                                    <h2>PILOTS</h2>
                                    <div className="hud-flex">
                                        {ship.pilots.map(pilot => {
                                            return (
                                                <PilotCard key={`p-${pilot.id}`} pilot={pilot} />
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                            <div className="film-section">
                                <h2>FILMS</h2>
                                <div className="film-scroll">
                                    {ship.films.map(film => {
                                        return (
                                            <FilmCard key={`f-${film.id}`} film={film} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </article>
                }
            </HudSection>
        </>
    )
}

