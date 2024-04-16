import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interface";

interface IClickedFile {
    filename:string,
        filecontent:string,
}

interface IInitialState {
    opendFile:IFile []
    clickedFile:IClickedFile 
}

const initialState:IInitialState = {
    opendFile:[],
    clickedFile:{
        filename:"",
        filecontent:"",
    }
}

const fileTreeSlice = createSlice({
 name:"fileTree",
 initialState,
 reducers:{
  setOpenFiles: (state, action:PayloadAction<IFile[]>) =>{
        state.opendFile = action.payload;
    }
  }
})

export const {setOpenFiles} =  fileTreeSlice.actions;

export default  fileTreeSlice.reducer;