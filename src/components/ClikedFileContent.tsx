 import { useSelector } from "react-redux";
 import { RootState } from "../app/store";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter"

const ClikedFileContent = () => {

     const {clickedFile} = useSelector((state:RootState) => state.tree);
  return (
    <div className="px-1 py-3 m-2">
      <span className="flex-row">
     
      <FileSyntaxHighlighter 
      content={clickedFile.filecontent}/>
      </span>
    </div>
  )
}

export default ClikedFileContent
