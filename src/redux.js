import { configureStore, createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employeeDataHandler",
  initialState: {
    employeeList: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employeeList = action.payload.employeeList;
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export const store = configureStore({
  reducer: {
    employeeDataHandler: employeeSlice.reducer,
  },
});
