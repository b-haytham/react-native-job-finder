import { createSlice } from '@reduxjs/toolkit'
import { CATEGORIES } from '../data'
import { JobCategory } from '../data_types'

// Define a type for the slice state
interface CategoryState {
  loading: boolean
  category_list: JobCategory[]
  error: string | null
}

// Define the initial state using that type
const initialState: CategoryState = {
  loading: false,
  category_list: CATEGORIES,
  error: null
}

const categorySlice = createSlice({
  name: 'category',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

  },
})

export const {  } = categorySlice.actions

export default categorySlice.reducer