import { createContext } from "react";

type ScreenContext = {
    isPortrait: boolean;
};

export const ScreenContext = createContext<ScreenContext | null>(null);