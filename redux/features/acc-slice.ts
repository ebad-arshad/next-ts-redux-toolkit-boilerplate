"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
}

const initialState: InitialState = {
};

export const acc = createSlice({
  name: "accDetails",
  initialState,
  reducers: {
    // function(state, action: PayloadAction<string[]>) {}
  },
});

export const { } = acc.actions

export default acc.reducer;