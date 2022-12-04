import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  isDark: false,
};

export const ModeAPP = createSlice({
  name: 'modeAPP',
  initialState,
  reducers: {
    changeState: state => {
      state.isDark = !state.isDark;
    },
  },
});

export const {changeState} = ModeAPP.actions;
export default ModeAPP.reducer;
