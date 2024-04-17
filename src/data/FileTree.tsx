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
    },{id:uuid(),name:"giro.js",isFolder:false,content:`import SyntaxHighlighter from 'react-syntax-highlighter';
    import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
    const Component = () => {
      const codeString = '(num) => num + 1';
      return (
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
      );
    };`}]},
        {id:uuid(),name:"package.json",isFolder:false,content:`{
          "name": "redux-tolkit",
          "private": true,
          "version": "0.0.0",
          "type": "module",
          "scripts": {
            "dev": "vite",
            "build": "tsc && vite build",
            "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
            "preview": "vite preview"
          },
          "dependencies": {
            "@reduxjs/toolkit": "^2.2.3",
            "class-variance-authority": "^0.7.0",
            "clsx": "^2.1.0",
            "lucide-react": "^0.368.0",
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "react-redux": "^9.1.1",
            "react-resizable-panels": "^2.0.17",
            "react-syntax-highlighter": "^15.5.0",
            "tailwind-merge": "^2.2.2",
            "uuid": "^9.0.1"
          },
          "devDependencies": {
            "@types/react": "^18.2.66",
            "@types/react-dom": "^18.2.22",
            "@types/react-syntax-highlighter": "^15.5.11",
            "@types/uuid": "^9.0.8",
            "@typescript-eslint/eslint-plugin": "^7.2.0",
            "@typescript-eslint/parser": "^7.2.0",
            "@vitejs/plugin-react": "^4.2.1",
            "autoprefixer": "^10.4.19",
            "eslint": "^8.57.0",
            "eslint-plugin-react-hooks": "^4.6.0",
            "eslint-plugin-react-refresh": "^0.4.6",
            "postcss": "^8.4.38",
            "tailwindcss": "^3.4.3",
            "typescript": "^5.2.2",
            "vite": "^5.2.0"
          }
        }
        `}]},
        {id:uuid(),name:"index.html",isFolder:false,content:`<!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vite + React + TS</title>
          </head>
          <body>
            <div id="root"></div>
            <script type="module" src="/src/main.tsx"></script>
          </body>
        </html>`}
        ,{id:uuid(),name:"index.css",isFolder:false,content:`@tailwind base;
        @tailwind components;
        @tailwind utilities;`},
        {id:uuid(),name:"public",isFolder:true,
        children:[{id:uuid(),name:"favicon",isFolder:true,
        children:[{id:uuid(),name:"config.node",isFolder:false,content:"la configuration de nodejs"}]}]},
        
        {id:uuid(),name:"src",isFolder:true,
        children:[{id:uuid(),name:"component",isFolder:true,
        children:[{id:uuid(),name:"page1.js",isFolder:false,content:`import {
          require_abnf
        } from "./chunk-GHYM63SR.js";
        import "./chunk-UV5CTPV7.js";
        export default require_abnf();
        //# sourceMappingURL=abnf-RG6KY5BL.js.map
        `},
        {id:uuid(),name:"App.tsx",isFolder:false,content:`import './App.css'
        import OpendFileBar from './components/OpendFileBar'
       import RecursiveComponents from './components/RecursiveComponents'
       import ResizeblPanel from './components/ResizblPanel'
       import { FileTree } from './data/FileTree'
       
       function App() {
         return (
           <>
           <div className='m-4 flex h-screen'>
           
             <ResizeblPanel showPanel={true} 
             LeftPanel={<div className='w-72'>
             <RecursiveComponents FileTree={FileTree} />
             </div>} RightPanel={<OpendFileBar />}/>
             
           </div>
           </>
           
         )
       }
       
       export default App`},
        {id:uuid(),name:"Home.jsx",isFolder:false,content:"le Home page du react js"},
        {id:uuid(),name:"page2.next",isFolder:false,content:"la page 2 du nextjs"},
        {id:uuid(),name:"interface.ts",isFolder:false,content:`export interface IFile {
          id: string;
            name: string;
            isFolder:boolean
            children?:IFile[
                
            ];
            content?:string
        }`}]}
     ,{id:uuid(),name:"lib",isFolder:true,
     children:[{id:uuid(),name:"utils.ts",isFolder:false,
     content:`import { ClassValue, clsx } from "clsx";
     import { twMerge } from "tailwind-merge";
     
     export function cn(...inputs: ClassValue[]) {
       return twMerge(clsx(inputs));
     }`}]}]},
        
        
        {id:uuid(),name:"gitignore.git",isFolder:false,content:`# Logs
        logs
        *.log
        npm-debug.log*
        yarn-debug.log*
        yarn-error.log*
        pnpm-debug.log*
        lerna-debug.log*
        
        node_modules
        dist
        dist-ssr
        *.local
        
        # Editor directories and files
        .vscode/*
        !.vscode/extensions.json
        .idea
        .DS_Store
        *.suo
        *.ntvs*
        *.njsproj
        *.sln
        *.sw?`},
        {id:uuid(),name:"yarn.yarn",isFolder:false},

        {id:uuid(),name:"allo.sql",isFolder:false,content:"data base SQL"}
        
    ]
}