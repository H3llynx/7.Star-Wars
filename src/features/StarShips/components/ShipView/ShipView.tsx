import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { ErrorImg } from '../../../../components/ErrorImg/ErrorImg';
import { HudSection } from '../../../../components/HudSection/HudSection';
import { Loading } from '../../../../components/Loading/Loading';
import { fetchShipById } from '../../StarShipsSlice';

export function ShipView() {
    const dispatch = useAppDispatch();
    const { selectedShip, selectedShipLoading, error } = useAppSelector(
        (state) => state.starships
    );
    const location = useLocation();
    const ship = location.state?.ship || selectedShip;

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
            {!error && !selectedShipLoading &&
                <article><p>Ceci est un test: {ship.name}</p></article>
            }
        </HudSection>
    )
}