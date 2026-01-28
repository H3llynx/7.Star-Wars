import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/Auth/AuthSlice";
import starshipsReducer from "../features/StarShips/StarShipsSlice";

export const store = configureStore({
    reducer: {
        starships: starshipsReducer,
        auth: authReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;