import { combineReducers } from '@reduxjs/toolkit'

import userSlice from './user/user_slice'

const rootReducer = combineReducers({
    user: userSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
