import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getShips } from './api/starships-service';
import type { StarShip } from './types/types';

type StarshipsState = {
    ships: StarShip[];
    loading: boolean;
    error: string | null;
    currentApiPage: number;
}

const loadShips = () => {
    const stored = localStorage.getItem("starships");
    return stored ? JSON.parse(stored) : [];
};

const initialState: StarshipsState = {
    ships: loadShips(),
    loading: false,
    error: null,
    currentApiPage: 1
};

export const fetchStarships = createAsyncThunk(
    'starships/fetchStarships',
    async (page: number) => {
        return await getShips(page);
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
            });
    },
});

export const { setPage } = starshipsSlice.actions;

export default starshipsSlice.reducer;