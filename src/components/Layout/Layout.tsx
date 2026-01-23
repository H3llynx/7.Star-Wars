import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '../Header/Header';
import { HudOverlay } from '../HudOverlay/HudOverlay';
import "./Layout.css";

export function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="app-container">
            <HudOverlay />
            <Header />
            <Outlet />
        </div>
    );
};