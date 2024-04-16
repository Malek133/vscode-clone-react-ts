
import { useState } from "react";
import { IFile } from "../interface"
import { ChevronRight } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import RenderFileIcones from "./RenderFileIcones";
import { useDispatch, useSelector } from "react-redux";
import { setOpenFiles } from "../app/features/FileTreeSlice";
import { RootState } from "../app/store";
import { doseFileObjectExist } from "../utils/functions";

interface IProps{
FileTree:IFile
}

const RecursiveComponents = 
({FileTree}:IProps) => {
 
  const {id,name,isFolder,children} = FileTree;
  const dispatch = useDispatch();
 const {opendFile} = useSelector((state:RootState) => state.tree);
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const toggel = () =>{
     setIsOpen(prev =>!prev)
  }

  const onFileClicked = ()=>{

    const exist = doseFileObjectExist(opendFile,id)
    if(exist) return;
     dispatch(setOpenFiles([...opendFile,FileTree]))  
    
  }
  
  return (
    <div>
    <div  className="ml-3 cursor-pointer">

    <div className="flex items-center mb-1">

      {
        isFolder ?  <>
        <div onClick={toggel} 
        className="flex items-center mb-1">
          {isOpen ? <ChevronDown 
          className=" text-gray-400" /> :  
          <ChevronRight className=" text-gray-400" /> }
        
        
        <RenderFileIcones filename={name} 
        isFolder={isFolder} isOpen={isOpen} />
        
        <span className='text-white font-medium'>
        {name}</span>
       
        </div>
        </> : (<div onClick={onFileClicked}
                 className="flex items-center mb-1">
          
          <RenderFileIcones filename={name} />
          <span className='text-white font-medium'>
           {name}</span>
        </div>
          
        )
          
      }

       </div>

        { isOpen && children &&
      children.map((file,idx)=>(
        <RecursiveComponents FileTree={file} 
        key={idx} />
      ))
     }
     
    </div>

    </div>
  )
}

export default RecursiveComponents