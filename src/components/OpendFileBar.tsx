import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpendFileItem from "./OpenFileItem";
import ClikedFileContent from "./ClikedFileContent";



const OpendFileBar = () => {
    const {opendFile} = useSelector((state:RootState) => state.tree);
  return (
    <div className="flex-row">
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
    
    </div>
  )
}

export default OpendFileBar