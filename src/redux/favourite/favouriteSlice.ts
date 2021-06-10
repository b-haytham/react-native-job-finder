import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JOBS } from "../data";
import { Job } from "../data_types";

// Define a type for the slice state
interface FavouriteState {
    loading: boolean;
    favourite_list: Job[];
    jobs_in_favourite: number[]
    error: string | null;
}

// Define the initial state using that type
const initialState: FavouriteState = {
    loading: false,
    favourite_list: [
        JOBS[3],
        JOBS[4],
    ],
    jobs_in_favourite: [3, 4],
    error: null,
};

const favouriteSlice = createSlice({
    name: "favourites",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addToFavorite(state, action: PayloadAction<Job>) {
            state.favourite_list.push(action.payload)
            state.jobs_in_favourite.push(action.payload.id)
        },
        removeFromFavourite(state, action: PayloadAction<number>) {
            state.favourite_list = state.favourite_list.filter(f => f.id !==action.payload)
            state.jobs_in_favourite = state.jobs_in_favourite.filter(f => f !== action.payload)  
        }
    },
});

export const {
    addToFavorite,
    removeFromFavourite
} = favouriteSlice.actions;

export default favouriteSlice.reducer;
