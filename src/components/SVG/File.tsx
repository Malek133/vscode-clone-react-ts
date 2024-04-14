import { svgStyles } from "../../style"


const FileIcone = () => {
  return (
<svg {...svgStyles}
className=" text-gray-400 dark:text-white" 
aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
 fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linejoin="round" 
  stroke-width="2" 
  d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 
  1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 
  .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 
  1 0 0 1 1 1Z"/>
</svg>
  
  )
}

export default FileIcone