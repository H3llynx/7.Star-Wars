import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import { ScreenContext } from '../context/ScreenContext';
import { formatUser, setUser } from '../features/Auth/AuthSlice';
import { firebaseAuth } from '../firebase';
import { router } from '../router/router';
import { useAppDispatch } from './hooks';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user: User | null) => {
      dispatch(setUser(formatUser(user)));
    });
    return () => unsubscribe();
  }, [dispatch]);

  const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    mediaQuery.addEventListener("change", (e) => {
      setIsPortrait(e.matches);
    });
  }, [])

  return (
    <ScreenContext value={{ isPortrait }}>
      <RouterProvider router={router} />
    </ScreenContext>
  )
}

export default App
