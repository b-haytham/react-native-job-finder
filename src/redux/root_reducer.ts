import { combineReducers } from '@reduxjs/toolkit'

import applicationSlice from './applications/applicationSlice'
import categorySlice from './categories/categorySlice'
import favouriteSlice from './favourite/favouriteSlice'
import jobSlice from './jobs/job_slice'
import userSlice from './user/user_slice'

const rootReducer = combineReducers({
    user: userSlice,
    jobs: jobSlice,
    categories: categorySlice,
    applications: applicationSlice,
    favourites: favouriteSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
