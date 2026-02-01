import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getShipById, getShips } from './api/starships-service';
import type { StarShip } from './types/types';

type StarshipsState = {
    ships: StarShip[];
    loading: boolean;
    moreShipsLoading: boolean;
    error: string | null;
    currentApiPage: number;
    selectedShip: StarShip | null;
    selectedShipLoading: boolean;

}

const loadShips = () => {
    const stored = localStorage.getItem("starships");
    return stored ? JSON.parse(stored) : [];
};

const initialState: StarshipsState = {
    ships: loadShips(),
    loading: false,
    moreShipsLoading: false,
    error: null,
    currentApiPage: 1,
    selectedShip: null,
    selectedShipLoading: false
};

export const fetchStarships = createAsyncThunk(
    "starships/fetchStarships",
    async (page: number) => {
        return await getShips(page);
    }
);

export const fetchMoreShips = createAsyncThunk(
    "starships/fetchMoreShips",
    async (page: number) => {
        return await getShips(page);
    }
);

export const fetchShipById = createAsyncThunk(
    "starships/fetchShipById",
    async (id: number, { getState }) => {
        const state = getState() as { starships: StarshipsState };
        const cachedShip = state.starships.ships.find(ship => ship.id === String(id));
        if (cachedShip) {
            return cachedShip;
        } else {
            return await getShipById(id)
        };
    }
);

const starshipsSlice = createSlice({
    name: "starships",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentApiPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStarships.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchStarships.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.ships = action.payload;
                localStorage.setItem("starships", JSON.stringify(action.payload));
            })
            .addCase(fetchStarships.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error";
            })
            .addCase(fetchMoreShips.pending, (state) => {
                state.moreShipsLoading = true;
                state.error = null;
            })
            .addCase(fetchMoreShips.fulfilled, (state, action) => {
                state.moreShipsLoading = false;
                state.error = null;
                state.ships = [...state.ships, ...action.payload];
            })
            .addCase(fetchMoreShips.rejected, (state, action) => {
                state.moreShipsLoading = false;
                state.error = action.error.message || "Error";
            })
            .addCase(fetchShipById.pending, (state) => {
                state.selectedShipLoading = true;
                state.error = null;
            })
            .addCase(fetchShipById.fulfilled, (state, action) => {
                state.selectedShipLoading = false;
                state.selectedShip = action.payload;
                state.error = null;
            })
            .addCase(fetchShipById.rejected, (state, action) => {
                state.selectedShipLoading = false;
                state.selectedShip = null;
                state.error = action.error.message || "Error";
            })
    },
});

export const { setPage } = starshipsSlice.actions;

export default starshipsSlice.reducer;