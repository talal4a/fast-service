import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line no-unused-vars
const initialState = {
  userName: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.userName = action.payload;
    },
  },
});
export const { updateName } = userSlice.actions;
export default userSlice.reducer;
