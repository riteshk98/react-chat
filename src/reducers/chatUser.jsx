import { createSlice } from "@reduxjs/toolkit";

export const chatUserSlice = createSlice({
    name: "chatUser",
    initialState: { value:{name:"Jack"}},
    reducers:{
        change: (state,action) =>{
            state.value = action.payload;
        }
    }
});

export const {change} = chatUserSlice.actions;


export default chatUserSlice.reducer;