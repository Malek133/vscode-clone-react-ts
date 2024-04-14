

import './App.css'
import RecursiveComponents from './components/RecursiveComponents'
import { FileTree } from './data/FileTree'

function App() {
  return (
    <div className='my-4'>
    <RecursiveComponents FileTree={FileTree} />
    
    </div>
  )
}

export default App
