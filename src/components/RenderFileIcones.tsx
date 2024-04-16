
import { Folder } from 'lucide-react';
import { FolderOpen } from 'lucide-react';
import IconeImage from './IconeImage';
import { File } from 'lucide-react';
import { extensionIcones } from './constant';

interface IProps{
filename:string
isFolder?:boolean
isOpen?:boolean
}
 

const RenderFileIcones = ({filename,isOpen,isFolder}:IProps) => {
     const extension = filename.split(".").pop();

     if(extension && Object.prototype.hasOwnProperty.call(
          extensionIcones,extension)){

                      if(isFolder){ 
                    if(isOpen){
                    return <IconeImage 
          src={`/icons/folder_type_${extensionIcones[extension]}_opened.svg`}/>;
                    } else {
                         return <IconeImage 
                         src={`/icons/folder_type_${extensionIcones[extension]}.svg`}/>;
                    }
          
               }else { return <IconeImage 
          src={`/icons/file_type_${extensionIcones[extension]}.svg`}/>;}
        
     }

     if(isFolder && isOpen) return <span className="text-yellow-500">
          < FolderOpen /></span> 
     if(isFolder && !isOpen) return <span className="text-yellow-500">
          < Folder /></span> 
    
     return <span className='text-zinc-400 mx-1'>
          <File /></span>
    
}

export default RenderFileIcones