import { combineReducers } from '@reduxjs/toolkit'

import jobSlice from './jobs/job_slice'
import userSlice from './user/user_slice'

const rootReducer = combineReducers({
    user: userSlice,
    jobs: jobSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
