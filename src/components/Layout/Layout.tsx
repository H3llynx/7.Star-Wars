import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Hub from "../../assets/svg/hub-border.svg?react";
import { Header } from '../Header/Header';
import "./Layout.css";

export function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Hub className="hub-screen" />
            <Header />
            <Outlet />
        </>
    );
};