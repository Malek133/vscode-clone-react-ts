import { IFile } from "../interface"
import { X } from 'lucide-react';
import RenderFileIcones from "./RenderFileIcones";
import { useDispatch, useSelector } from "react-redux";
import {setClickedFile } from "../app/features/FileTreeSlice";
import { RootState } from "../app/store";
interface IProps{
file:IFile
}

const OpendFileItem = ({file}:IProps) => {
const dispatch = useDispatch()
  const onClick = () =>{
    const {id,name,content} = file
    dispatch(setClickedFile({filename:name,filecontent:content,activeTabId:id}))
    // dispatch(setActiveTabId(id))
  }

  const {clickedFile:{activeTabId}} = useSelector((state:RootState) => state.tree);

  return (
    <div onClick={onClick} style={{
        borderTop: file.id === activeTabId ? "2px solid #ae91ff" : "",
      }}
    className="flex justify-around px-1
     text-gray-400 items-center space-x-4 border-2 
    cursor-pointer border-slate-700 rounded">

            <span className="w-6 h-6">
            <RenderFileIcones filename={file.name} />
            </span>

            <li className='py-1 px-7 '>
             {file.name}</li>

            <span><X /></span>

    </div>)
}

export default OpendFileItem