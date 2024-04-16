import { IFile } from "../interface";

export const doseFileObjectExist = (arr:IFile[],id:string) =>{
return arr.some(item=> item.id === id);
}