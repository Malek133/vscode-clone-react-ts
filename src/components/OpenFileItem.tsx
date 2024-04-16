import { IFile } from "../interface"
import { X } from 'lucide-react';
import RenderFileIcones from "./RenderFileIcones";
interface IProps{
file:IFile
}

const OpendFileItem = ({file}:IProps) => {
  return (
    <div className="flex justify-around px-1
     text-gray-400 items-center space-x-4 border-2 
    cursor-pointer border-slate-700 rounded ">

        <span className="w-6 h-6">
            <RenderFileIcones filename={file.name} />
            </span>
            
       <li className='py-1 px-7 '>
    {file.name}</li>

    <span className="hover:bg-slate-300"><X /></span>

    </div>)
}

export default OpendFileItem