
import { useState } from "react";
import { IFile } from "../interface"
import FileIcone from "./SVG/File"
import { ChevronRight } from 'lucide-react';
import { Folder } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
// import FolderIcone from "./SVG/Folder";

interface IProps{
FileTree:IFile
}

const RecursiveComponents = 
({FileTree:{name,isFolder,children}}:IProps) => {

  const [isOpen,setIsOpen] = useState<boolean>(false);
  const toggel = () =>{
     setIsOpen(prev =>!prev)
  }
  return (
    <>
    <div  className="ml-3 cursor-pointer">

    <div className="flex items-center mb-1">

      {
        isFolder ?  <>
        <div onClick={toggel} className="flex items-center mb-1">
          {isOpen ? <ChevronDown className=" text-gray-400" /> :  
          <ChevronRight className=" text-gray-400" /> }
        
        <Folder className="text-yellow-500" />
        <span className='text-white font-medium'>
        {name}</span>
        {/* <FolderIcone /> */}
        </div>
        </> : (<div className="flex items-center mb-1">
          <FileIcone />
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
    </>
  )
}

export default RecursiveComponents