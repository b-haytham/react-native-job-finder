import { createSlice } from '@reduxjs/toolkit'
import { CURRENT_USER } from '../data'
import { User } from '../data_types'

// Define a type for the slice state
interface UserState {
  loading: boolean
  current_user: User | null
  error: string | null
}

// Define the initial state using that type
const initialState: UserState = {
  loading: false,
  current_user: CURRENT_USER,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

  },
})

export const {  } = userSlice.actions

export default userSlice.reducer