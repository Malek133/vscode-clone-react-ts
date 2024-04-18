import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interface";

interface IClickedFile {
    filename:string,
        filecontent:string | undefined,
        activeTabId:string|null;
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
        activeTabId:null,
    }
}

const fileTreeSlice = createSlice({
 name:"fileTree",
 initialState,
 reducers:{
  setOpenFiles: (state, action:PayloadAction<IFile[]>) =>{
        state.opendFile = action.payload;
    },
    setClickedFile : (state, action:PayloadAction<IClickedFile>) =>{
        state.clickedFile=action.payload;
    },
    // setActiveTabId : (state, action:PayloadAction<string>) =>{
    //    state.activeTabId  = action.payload;
    // }
  }
})

export const {setOpenFiles,setClickedFile} =  fileTreeSlice.actions;

export default  fileTreeSlice.reducer;