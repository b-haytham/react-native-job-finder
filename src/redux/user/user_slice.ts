import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CURRENT_USER } from "../data";
import { User } from "../data_types";

// Define a type for the slice state
interface UserState {
    loading: boolean;
    current_user: User;
    error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
    loading: false,
    current_user: CURRENT_USER,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        updateImageProfile(state, action: PayloadAction<string>) {
            state.current_user.image = action.payload;
        },
        updateFullName(state, action: PayloadAction<string>) {
            state.current_user.full_name = action.payload;
        },
        updateMainInfo(
            state,
            action: PayloadAction<{
                job_title: string;
                location: string;
                birth_day: string;
            }>
        ) {
            state.current_user.main_info = action.payload;
        },
        uodateContactInfo(
            state,
            action: PayloadAction<{
                email: string;
                phone: string;
                facebook?: string;
                tweeter?: string;
            }>
        ) {
            state.current_user.contact_info = action.payload;
        },
        updateAbout(state, action: PayloadAction<string>) {
            state.current_user.about = action.payload;
        },
        updateSkills(state, action: PayloadAction<string[]>) {
            state.current_user.skills = action.payload;
        },
        updateWorkExperiences(
            state,
            action: PayloadAction<
                {
                    position_title: string;
                    where: string;
                    image?: string;
                    duration: string;
                }[]
            >
        ) {
            state.current_user.work_experiences = action.payload;
        },
        updateEducation(
            state,
            action: PayloadAction<{
                university_name: string;
                degree_name: string;
                duration: string;
            }>
        ) {
            state.current_user.education = action.payload;
        },
    },
});

export const {
  uodateContactInfo,
  updateAbout,
  updateEducation,
  updateFullName,
  updateImageProfile,
  updateMainInfo,
  updateSkills,
  updateWorkExperiences
} = userSlice.actions;

export default userSlice.reducer;
