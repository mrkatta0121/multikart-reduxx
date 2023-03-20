import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid"

import axios from "axios";

const HomepageSlices = createSlice({
    name: "Homepages",
    initialState: {
        items: [],
        status: "pending",
        error: "null"
    },
    reducers: {},
    extraReducers: builder => builder.addCase(fetchHomepageData.pending, (state, action) => {
        state.status = "pending";
    })
        .addCase(fetchHomepageData.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error;
        })
        .addCase(fetchHomepageData.fulfilled, (state, action) => {
            state.status = "fullfilled";
            state.items = action.payload;

        })
})
export const fetchHomepageData = createAsyncThunk("Homepage/fetch", async ()=> {
    try {
        const { data } = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789913/React%20Class/Mahesh/top_collections_rmgdhz.json");
       console.log(data)
        return data.items.map(e => ({...e,id:uuid()}));

    } catch (error) {
        console.log(error);
        return error.message;
    }
})
export default HomepageSlices;