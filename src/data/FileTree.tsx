import { IFile } from "../interface";
import { v4 as uuid } from 'uuid';


export const FileTree:IFile = {
    id:uuid(),
    name: "VsCode",
    isFolder:true,
    children:[
        {id:uuid(),name:"module",isFolder:true,
        children:[{id:uuid(),name:"dev",isFolder:true,
        children:[{id:uuid(),name:"local.js",isFolder:false},{id:uuid(),name:"giro.js",isFolder:false}]},
        {id:uuid(),name:"package.json",isFolder:false}]},
        {id:uuid(),name:"index.html",isFolder:false},{id:uuid(),name:"index.css",isFolder:false},
        {id:uuid(),name:"public",isFolder:true,
        children:[{id:uuid(),name:"favicon",isFolder:true,
        children:[{id:uuid(),name:"config.node",isFolder:false}]}]},
        
        {id:uuid(),name:"src",isFolder:true,
        children:[{id:uuid(),name:"component",isFolder:true,
        children:[{id:uuid(),name:"page1.js",isFolder:false},
        {id:uuid(),name:"App.tsx",isFolder:false},
        {id:uuid(),name:"Home.jsx",isFolder:false},
        {id:uuid(),name:"page2.next",isFolder:false},
        {id:uuid(),name:"page3.ts",isFolder:false}]}
     ,{id:uuid(),name:"data",isFolder:true,children:[{id:uuid(),name:"index.ts",isFolder:false}]}]},
        
        
        {id:uuid(),name:"ignor.git",isFolder:false},
        {id:uuid(),name:"yarn.yarn",isFolder:false},
        {id:uuid(),name:"allo.sql",isFolder:false}
        
    ]
}