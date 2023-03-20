import { configureStore } from "@reduxjs/toolkit";
import InstagramSlice from "../components/instagram";
import HomepageSlice from "./slice/asyncSlice";
import HomepageSlices from "./slice/asyncSlice2";
import cartSlice from "./slice/cartSlice";





export const Store = configureStore({
    reducer: {
        Homepage:HomepageSlice.reducer,
        Cart:cartSlice.reducer,
       Homepages:HomepageSlices.reducer,
       
    }
})


export default Store;