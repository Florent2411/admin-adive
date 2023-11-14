import { createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../api/client";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        user: null,
    },

    reducers: {
        authenticate: (state, action) => {
            const { token, user } = action.payload;

            apiClient.setAuthToken(token);
            state.token = token;
            state.user = user;
        },

        logout: (state) => {
            apiClient.setAuthToken("");
            state.token = "";
            state.user = null;
        }
    },
});

export const authReducer = authSlice.reducer;

export const { authenticate, logout } = authSlice.actions;