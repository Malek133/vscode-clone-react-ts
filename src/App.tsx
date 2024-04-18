
import { useSelector } from 'react-redux'
import './App.css'
 import OpendFileBar from './components/OpendFileBar'
import RecursiveComponents from './components/RecursiveComponents'
import ResizeblPanel from './components/ResizblPanel'
import { FileTree } from './data/FileTree'
import { RootState } from './app/store'
import WelcomeIcone from './components/WelcomeIcone'



function App() {

  const {opendFile} = useSelector(({tree}:RootState) => tree);
  return (
    <>
    <div className='m-4 flex h-screen'>
    
      <ResizeblPanel showPanel={true} 
      LeftPanel={<div className='w-60'>
      <RecursiveComponents FileTree={FileTree} />
      
      </div>} RightPanel={opendFile.length ? (<OpendFileBar />) 
      :(<WelcomeIcone />)}/>
      
    </div>
    </>
    
  )
}

export default App
