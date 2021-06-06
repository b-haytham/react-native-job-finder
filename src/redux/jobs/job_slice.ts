import { createSlice } from "@reduxjs/toolkit";
import { JOBS } from "../data";
import { Job } from "../data_types";

// Define a type for the slice state
interface JobsState {
    loading: boolean;
    job_list: Job[];
    error: string | null;
}

// Define the initial state using that type
const initialState: JobsState = {
    loading: false,
    job_list: JOBS,
    error: null,
};

export const jobSlice = createSlice({
    name: "jobs",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
});

export const {} = jobSlice.actions;

export default jobSlice.reducer;
