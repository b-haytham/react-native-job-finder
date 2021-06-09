import { createSlice } from "@reduxjs/toolkit";
import { JOBS } from "../data";
import { Job } from "../data_types";

export interface Application {
    job: Job
    status: 'Pending' | 'Viewed' | 'Accepted' | 'Selected' | 'Rejected'
}

// Define a type for the slice state
interface ApplicationState {
    loading: boolean;
    application_list: Application[];
    jobs_applied: number[]
    error: string | null;
}

// Define the initial state using that type
const initialState: ApplicationState = {
    loading: false,
    application_list: [
        {
            job: JOBS[3],
            status: 'Pending'
        },
        {
            job: JOBS[4],
            status: 'Selected'
        }
    ],
    jobs_applied: [3, 4],
    error: null,
};

export const applicationSlice = createSlice({
    name: "applications",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
});

export const {} = applicationSlice.actions;

export default applicationSlice.reducer;
