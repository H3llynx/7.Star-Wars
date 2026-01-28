import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button } from "../../components/Button/Button";
import { ErrorImg } from "../../components/ErrorImg/ErrorImg";
import { HudSection } from "../../components/HudSection/HudSection";
import { Loading } from "../../components/Loading/Loading";
import { ShipCard } from "./components/ShipCard/ShipCard";
import "./StarShips.css";
import { fetchStarships, setPage } from "./StarShipsSlice";

export function StarShips() {
    const dispatch = useAppDispatch();
    const { ships, loading, currentApiPage, error } = useAppSelector(
        state => state.starships
    );

    useEffect(() => {
        if (ships.length === 0) {
            dispatch(fetchStarships(currentApiPage));
        }
    }, []);

    const handleNextPage = () => {
        const nextPage = currentApiPage + 1
        dispatch(setPage(nextPage));
        dispatch(fetchStarships(nextPage))
    };

    return (
        <HudSection title="Starship catalog">
            {loading && <Loading />}
            {error && <ErrorImg />}
            {!error && !loading &&
                <div className="ship-list scroll">
                    <ul>
                        {ships.map(ship => {
                            return (
                                <li key={ship.id}>
                                    <ShipCard
                                        {...ship} />
                                </li>
                            )
                        })}
                    </ul>
                    {currentApiPage < 4 &&
                        <Button
                            onClick={handleNextPage}>
                            Load more starships
                        </Button>}
                </div>
            }
        </HudSection>
    )
}