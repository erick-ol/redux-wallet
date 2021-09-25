// Esse reducer será responsável por tratar as informações da pessoa usuária
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    email: '',
  },
  reducers: {
    setUserEmail: (state, action) => { state.email = action.payload; },
  },
});

export const { setUserEmail } = slice.actions;
export default slice.reducer;
