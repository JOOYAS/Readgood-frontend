import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loggedIn: false,
        user: null,
    },
    reducers: {
        changeLoginState: (state, action) => {
            state.loggedIn = action.payload.loggedIn;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.user = null;
        },
    },
});

export const { changeLoginState, logout } = loginSlice.actions;

export default loginSlice.reducer;
