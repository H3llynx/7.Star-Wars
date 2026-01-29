import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyASbExFvYqlM593QxTv-inCD0uAU137QQY",
    authDomain: "sprint-7-star-wars.firebaseapp.com",
    projectId: "sprint-7-star-wars",
    storageBucket: "sprint-7-star-wars.firebasestorage.app",
    messagingSenderId: "426123754222",
    appId: "1:426123754222:web:7375c33715eab95da591ff"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
