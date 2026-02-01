import { NavLink } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logoutUser } from "../../features/Auth/AuthSlice";

export function AuthArea() {
    const { user, loading } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const handleLogOut = async () => {
        dispatch(logoutUser());
    }

    return (
        <div className="auth-area">
            {loading && <span className="text-loading">Loading</span>}
            {user && !loading &&
                <>
                    <span>Operator: <span className="user-name">{user.displayName}</span></span>
                    <span>|</span>
                    <button
                        onClick={handleLogOut}
                        tabIndex={0}
                    >Log out
                    </button>
                </>
            }
            {!user && !loading &&
                <NavLink
                    to="auth"
                    tabIndex={0}
                >
                    Login
                </NavLink>
            }
        </div>
    )
}