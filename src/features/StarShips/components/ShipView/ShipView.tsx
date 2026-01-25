import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { HudError } from '../../../../components/HudError/HudError';
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

    if (selectedShipLoading) {
        return <Loading />;
    }

    if (error) {
        return (
            <HudError />
        );
    }

    if (!ship) {
        return <Loading />;
    }

    return (
        <HudSection title={ship.name}>
            <article>

            </article>
        </HudSection>
    )
}