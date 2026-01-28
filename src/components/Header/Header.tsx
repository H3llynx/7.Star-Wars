import { NavLink, useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Logo from "../../assets/svg/logo.svg?react";
import { logoutUser } from "../../features/Auth/AuthSlice";
import "./Header.css";

export function Header() {

    const location = useLocation();
    const { user } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const handleLogOut = async () => {
        dispatch(logoutUser());
    }

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
            {user &&
                <button
                    onClick={handleLogOut}
                    tabIndex={0}
                >Log out
                </button>}
            {!user &&
                <NavLink
                    to="auth"
                    tabIndex={0}
                >
                    Login
                </NavLink>
            }
        </header>
    )
}