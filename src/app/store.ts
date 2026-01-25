import { configureStore } from '@reduxjs/toolkit';
import starshipsReducer from "../features/StarShips/StarShipsSlice";

export const store = configureStore({
    reducer: {
        starships: starshipsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;