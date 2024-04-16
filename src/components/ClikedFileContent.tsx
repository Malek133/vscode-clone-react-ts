import { useSelector } from "react-redux";
import { RootState } from "../app/store";


const ClikedFileContent = () => {

    const {clickedFile} = useSelector((state:RootState) => state.tree);
  return (
    <div className="px-1 py-3 m-2">
      <span className="text-gray-400 flex-row ">
      {clickedFile.filecontent}
      </span>
    </div>
  )
}

export default ClikedFileContent
