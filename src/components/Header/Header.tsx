import { NavLink, useLocation } from "react-router";
import { useAppSelector, useScreen } from "../../app/hooks";
import Logo from "../../assets/svg/logo.svg?react";
import { AuthArea } from "../AuthArea/AuthArea";
import "./Header.css";

export function Header() {
    const location = useLocation();
    const { user } = useAppSelector(state => state.auth);
    const { isPortrait } = useScreen();

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
                {user &&
                    <NavLink
                        to="/starships"
                        className="nav-link neon-text"
                        tabIndex={location.pathname === "/starships" ? -1 : 0}
                    >
                        Starships
                    </NavLink>
                }
            </nav>
            {!isPortrait && <AuthArea />}
        </header>
    )
}