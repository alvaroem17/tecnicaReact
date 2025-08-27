import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: ''
  },
  reducers: {
    setToken: (state, newValue) => {
      state.token = newValue.payload
    }
  }
})
