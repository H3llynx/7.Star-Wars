import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { ErrorImg } from '../../../../components/ErrorImg/ErrorImg';
import { HudSection } from '../../../../components/HudSection/HudSection';
import { Loading } from '../../../../components/Loading/Loading';
import { fetchShipById } from '../../StarShipsSlice';
import type { StarShip } from '../../types/types';
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
        <HudSection title={title}>
            {selectedShipLoading && <Loading />}
            {error && <ErrorImg />}
            {!error && ship &&
                <article>
                    <img src={ship.src} className="ship-hologram" />
                    <div className="ship-info scroll">
                        <h1>{ship.name}</h1>
                        <p className="ship-subtitle">{ship.manufacturer}</p>

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

                        {ship.pilots &&
                            <div className="hud-section">
                                <h2>PILOTS</h2>
                                <div className="hud-pilot">
                                    {ship.pilots.map(pilot => {
                                        return (
                                            <PilotCard pilot={pilot} />
                                        )
                                    })}
                                </div>
                            </div>
                        }
                    </div>
                </article>
            }
        </HudSection>
    )
}

