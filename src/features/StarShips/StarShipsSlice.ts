import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getShipById, getShips } from './api/starships-service';
import type { StarShip } from './types/types';

type StarshipsState = {
    ships: StarShip[];
    loading: boolean;
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

export const fetchShipById = createAsyncThunk(
    "starships/fetchShipById",
    async (id: number, { getState }) => {
        const state = getState() as { starships: StarshipsState };
        const cachedShip = state.starships.ships.find(ship => ship.id === String(id));
        if (cachedShip) {
            console.log("en cache")
            return cachedShip;
        } else {
            console.log("fetching")
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
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStarships.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchStarships.fulfilled, (state, action) => {
                state.loading = false;
                if (state.currentApiPage === 1) {
                    state.ships = action.payload;
                    localStorage.setItem("starships", JSON.stringify(action.payload));
                } else {
                    state.ships = [...state.ships, ...action.payload];
                }
            })
            .addCase(fetchStarships.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error";
            })
            .addCase(fetchShipById.pending, (state) => {
                state.selectedShipLoading = true;
            })
            .addCase(fetchShipById.fulfilled, (state, action) => {
                state.selectedShipLoading = false;
                state.selectedShip = action.payload;
            })
            .addCase(fetchShipById.rejected, (state, action) => {
                state.selectedShipLoading = false;
                state.error = action.error.message || "Error";
            })
    },
});

export const { setPage } = starshipsSlice.actions;

export default starshipsSlice.reducer;