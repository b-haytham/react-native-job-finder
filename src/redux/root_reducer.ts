import { combineReducers } from '@reduxjs/toolkit'

import categorySlice from './categories/categorySlice'
import jobSlice from './jobs/job_slice'
import userSlice from './user/user_slice'

const rootReducer = combineReducers({
    user: userSlice,
    jobs: jobSlice,
    categories: categorySlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
