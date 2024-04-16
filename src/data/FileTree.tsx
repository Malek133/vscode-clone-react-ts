import { IFile } from "../interface";
import { v4 as uuid } from 'uuid';


export const FileTree:IFile = {
    id:uuid(),
    name: "VsCode",
    isFolder:true,
    children:[
        {id:uuid(),name:"module",isFolder:true,
        children:[{id:uuid(),name:"dev",isFolder:true,
        children:[{id:uuid(),name:"local.js",isFolder:false,content:"local code de javascript"
    },{id:uuid(),name:"giro.js",isFolder:false,content:"configuration de javascript ver typescript"}]},
        {id:uuid(),name:"package.json",isFolder:false}]},
        {id:uuid(),name:"index.html",isFolder:false,content:"HTML content generale"}
        ,{id:uuid(),name:"index.css",isFolder:false,content:"le code principale de style"},
        {id:uuid(),name:"public",isFolder:true,
        children:[{id:uuid(),name:"favicon",isFolder:true,
        children:[{id:uuid(),name:"config.node",isFolder:false,content:"la configuration de nodejs"}]}]},
        
        {id:uuid(),name:"src",isFolder:true,
        children:[{id:uuid(),name:"component",isFolder:true,
        children:[{id:uuid(),name:"page1.js",isFolder:false,content:"la page 1 du javascript"},
        {id:uuid(),name:"App.tsx",isFolder:false,content:"le commponents principale"},
        {id:uuid(),name:"Home.jsx",isFolder:false,content:"le Home page du react js"},
        {id:uuid(),name:"page2.next",isFolder:false,content:"la page 2 du nextjs"},
        {id:uuid(),name:"page3.ts",isFolder:false,content:"la page 3 du typescript"}]}
     ,{id:uuid(),name:"data",isFolder:true,
     children:[{id:uuid(),name:"index.ts",isFolder:false,
     content:"voici le code index"}]}]},
        
        
        {id:uuid(),name:"ignor.git",isFolder:false,content:"le élement a ignor"},
        {id:uuid(),name:"yarn.yarn",isFolder:false,content:"yarn yarn commande"},

        {id:uuid(),name:"allo.sql",isFolder:false,content:"data base SQL"}
        
    ]
}