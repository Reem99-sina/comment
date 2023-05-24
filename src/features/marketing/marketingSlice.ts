import { createSlice } from "@reduxjs/toolkit";
interface analyticsinterface {
  id: number;
  name: string;
  mainnav?: string;
}
const initialState: analyticsinterface = {
  id: 0,
  name: "",
  mainnav: "",
};

export const marketingSlice = createSlice({
  name: "marketing",
  initialState,
  reducers: {
    clickcard: (state, action) => {
      state.id = action.payload;
    },
    breadcrumdsname: (state, action) => {
      state.name = action.payload;
    },
    mainnav: (state, action) => {
      state.mainnav = action.payload;
    },
  },
});

export const { clickcard, breadcrumdsname, mainnav } = marketingSlice.actions;
export default marketingSlice.reducer;
