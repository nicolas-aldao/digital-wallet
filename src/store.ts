import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import counterReducer from "./features/counterSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
});
