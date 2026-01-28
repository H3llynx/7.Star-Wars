import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { formatUser, setUser } from '../features/Auth/AuthSlice';
import { firebaseAuth } from '../firebase';
import { router } from '../router';
import { useAppDispatch } from './hooks';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user: User | null) => {
      dispatch(setUser(formatUser(user)));
    });
    return () => unsubscribe();
  }, [dispatch]);

  return <RouterProvider router={router} />;

}

export default App
