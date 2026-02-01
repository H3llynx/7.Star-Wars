import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector, useScreen } from '../../app/hooks';
import { AuthArea } from "../../components/AuthArea/AuthArea";
import { Button } from "../../components/Button/Button";
import { ErrorImg } from "../../components/ErrorImg/ErrorImg";
import { HudSection } from "../../components/HudSection/HudSection";
import { Input } from "../../components/Input/Input";
import { Loading } from "../../components/Loading/Loading";
import { ShipCard } from "./components/ShipCard/ShipCard";
import "./StarShips.css";
import { fetchMoreShips, fetchStarships, setPage } from "./StarShipsSlice";

export function StarShips() {
    const dispatch = useAppDispatch();
    const { ships, loading, currentApiPage, error, moreShipsLoading } = useAppSelector(
        state => state.starships
    );
    const { isPortrait } = useScreen();
    const containerRef = useRef<HTMLDivElement>(null);
    const [filter, setFilter] = useState("");
    const [filteredShips, setFilteredShips] = useState(ships);

    useEffect(() => {
        if (ships.length === 0) {
            dispatch(fetchStarships(currentApiPage));
        };
    }, []);

    const handleNextPage = () => {
        const scrollPosition = containerRef.current?.scrollTop;
        const nextPage = currentApiPage + 1
        dispatch(setPage(nextPage));
        dispatch(fetchMoreShips(nextPage)).then(() => {
            if (containerRef.current && scrollPosition !== undefined) {
                containerRef.current.scrollTop = scrollPosition;
            }
        });
    };

    useEffect(() => {
        if (filter.trim() === "") setFilteredShips(ships);
        else {
            const filteredShips = ships.find(ship => ship.name.toLowerCase().includes(filter.trim().toLowerCase()));
            setFilteredShips(filteredShips ? [filteredShips] : []);
        }
    }, [filter, ships])

    return (
        <HudSection title="Starship catalog">
            {loading && <Loading />}
            {error && <ErrorImg />}
            {!error && !loading &&
                <div className="ship-list scroll" ref={containerRef}>
                    {isPortrait && <AuthArea />}
                    <Input
                        id="filter"
                        type="text"
                        label="FILTER FLEET"
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <ul>
                        {filteredShips.map(ship => {
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
                            {!moreShipsLoading && <span>Load more starships</span>}
                            {moreShipsLoading && <span className="text-loading">Loading</span>}
                        </Button>}
                </div>
            }
        </HudSection>
    )
}