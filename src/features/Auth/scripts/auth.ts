import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { firebaseAuth } from "../../../firebase";

export const handleEmailRegister = async (name: string, email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    await updateProfile(userCredential.user, {
        displayName: name
    });
    return userCredential.user;
};

export const handleEmailLogin = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
    return userCredential.user;
}