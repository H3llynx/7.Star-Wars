import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { firebaseAuth } from "../../../firebase";
import type { Auth } from '../types/types';

export const handleEmailRegister = async ({ name, email, password }: Auth) => {
    const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    await updateProfile(userCredential.user, {
        displayName: name
    });
    return userCredential.user;
};

export const handleEmailLogin = async ({ email, password }: Auth) => {
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
    return userCredential.user;
}

export const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(firebaseAuth, provider);
    return userCredential.user;
};