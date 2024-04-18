import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpendFileItem from "./OpenFileItem";
import ClikedFileContent from "./ClikedFileContent";
import { useState } from "react";
import ContextMenu from "./ui/ContextMenu";



const OpendFileBar = () => {
  const [showMenu,setShowMenu]=useState(false)
const [menuPosition,setMenuPosition]=useState<{x:number,y:number}>({x:0,y:0});
    const {opendFile} = useSelector((state:RootState) => state.tree);
  return (
    <div
    onContextMenu={(e) =>{
      e.preventDefault();
      setMenuPosition({x:e.clientX,y:e.clientY});
      setShowMenu(true)
    }}
     className="flex-row">
    <div className='text-white flex justify-center mx-2'>
    <ul className='flex items-start space-x-2'>
      {
        opendFile.map((file) => 
        <OpendFileItem key={file.id} file={file} />
        )
      }
    </ul>
    </div>

     <ClikedFileContent />

     {showMenu && <ContextMenu setShowMenu={setShowMenu} positions={menuPosition} />}
    
    </div>
  )
}

export default OpendFileBar