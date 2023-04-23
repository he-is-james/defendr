import { User } from '@/interfaces'
import { createSlice } from '@reduxjs/toolkit'

interface State {
  isLoggedIn: boolean
  userData: User | null
  refresh: number
}

const initialState: State = {
  isLoggedIn: false,
  userData: null,
  refresh: 0,
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
      state.userData = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.userData = null
    },
    refresh: (state) => {
      state.refresh += 1
    },
    updateUserData: (state, action) => {
      state.userData = action.payload
    },
  },
})

export const { login, logout, refresh, updateUserData } = authSlice.actions

export default authSlice.reducer
