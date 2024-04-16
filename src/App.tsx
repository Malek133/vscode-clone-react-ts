


import './App.css'
import OpendFileBar from './components/OpendFileBar'
import RecursiveComponents from './components/RecursiveComponents'
import { FileTree } from './data/FileTree'



function App() {

 
  return (
    <>
    <div className='m-4 flex h-screen'>
    <div className='w-72 border-r-2 border-slate-700'>
      <RecursiveComponents FileTree={FileTree} />
      </div>

      <OpendFileBar />
       
    </div>
    </>
    
  )
}

export default App
