import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpendFileItem from "./OpenFileItem";



const OpendFileBar = () => {
    const {opendFile} = useSelector((state:RootState) => state.tree);
  return (
    <>
    <div className=' mx-2 text-white flex justify-center'>
    <ul className='flex items-start space-x-4'>
      {
        opendFile.map((file) => 
        <OpendFileItem key={file.id} file={file} />
        )
      }
    </ul>
    </div>
    </>
  )
}

export default OpendFileBar