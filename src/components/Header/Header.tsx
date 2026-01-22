import { NavLink, useLocation } from "react-router";
import Logo from "../../assets/svg/logo.svg?react";
import "./Header.css";


export function Header() {
    const location = useLocation();
    return (
        <header>
            <Logo className="logo" aria-label="Star Wars" />
            <nav>
                <NavLink
                    to="/"
                    className="nav-link neon-text"
                    tabIndex={location.pathname === "/" ? -1 : 0}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/starships"
                    className="nav-link neon-text"
                    tabIndex={location.pathname === "/starships" ? -1 : 0}
                >
                    Starships
                </NavLink>
            </nav>
        </header>
    )
}