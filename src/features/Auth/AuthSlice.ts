import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import type { User } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../../firebase';
import { handleEmailLogin, handleEmailRegister } from "./scripts/auth";
import type { Auth } from './types/types';

export type FormattedUser = {
    uid: string;
    email: string | null;
    displayName: string | null;
}

export type AuthState = {
    user: FormattedUser | null;
    loading: boolean;
    error: string | null;
    authenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
    authenticated: false
};

export const formatUser = (user: User | null) => {
    if (!user) return null;
    return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
    };
};

export const registerUser = createAsyncThunk(
    "auth/register",
    async ({ name, email, password }: Auth, { rejectWithValue }) => {
        try {
            const user = await handleEmailRegister({ name, email, password });
            return user;
        } catch (error) {
            if (error instanceof FirebaseError) {
                return rejectWithValue(error.code);
            }
            return rejectWithValue('auth/unknown-error');
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password }: Auth, { rejectWithValue }) => {
        try {
            const user = await handleEmailLogin({ email, password });
            return user;
        } catch (error) {
            if (error instanceof FirebaseError) {
                return rejectWithValue(error.code);
            }
            return rejectWithValue('auth/unknown-error');
        }
    }
);

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async () => {
        await signOut(firebaseAuth);
    });

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<FormattedUser | null>) => {
            state.user = action.payload;
            state.authenticated = action.payload ? true : false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            }
            )
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = formatUser(action.payload);
                state.authenticated = true;
                state.error = null;
            }
            )
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.authenticated = false;
                state.user = null;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            }
            )
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = formatUser(action.payload);
                state.authenticated = true;
                state.error = null;
            }
            )
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.authenticated = false;
                state.user = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.authenticated = false;
                state.error = null;
            })
    }
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;