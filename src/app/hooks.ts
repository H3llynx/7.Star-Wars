import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScreenContext } from '../context/ScreenContext';
import type { AppDispatch, RootState } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useScreen = () => {
    const context = useContext(ScreenContext);
    if (!context) {
        throw new Error("Context / provider issue")
    }
    return context;
}