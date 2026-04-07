import { createSlice } from "@reduxjs/toolkit";

const clockSlice = createSlice({
  name: "clocks",
  initialState: [],
  reducers: {
    addClock: (state, action) => {
      const exists = state.find(c => c.tz === action.payload.tz);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeClock: (state, action) => {
      return state.filter(c => c.id !== action.payload);
    },
  },
});

export const { addClock, removeClock } = clockSlice.actions;
export default clockSlice.reducer;