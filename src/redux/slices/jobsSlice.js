import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
    name: "jobs",
    initialState: {
        jobs: [],
        loading: true,
        selectedJobId: null,
    },

    reducers: {
        fetchJobsSuccess: (state, action) => {
            state.jobs = action.payload.jobs;
            state.loading = false

        },

        selectJob: (state, action) => {
            state.selectedJobId = action.payload.id;
        }
    },
});

export const jobsReducer = jobsSlice.reducer;

export const { fetchJobsSuccess, selectJob } = jobsSlice.actions;