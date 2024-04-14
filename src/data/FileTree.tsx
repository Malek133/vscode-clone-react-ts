import { IFile } from "../interface";

export const FileTree:IFile = {
    name: "first1Project",
    isFolder:true,
    children:[
        {name:"public",isFolder:true,
        children:[{name:"vite.svg",isFolder:false}]},
        
        {name:"src",isFolder:true,
        children:[{name:"components",isFolder:true,
        children:[{name:"page1.tsx",isFolder:false},
        {name:"page2.tsx",isFolder:false}]}]},
        
        {name:"App.tsx",isFolder:false}
        
    ]
}