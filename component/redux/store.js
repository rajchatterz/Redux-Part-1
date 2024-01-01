import rootreducer from "./rootreducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:rootreducer
})
export default store