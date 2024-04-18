import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { setOpenFiles } from "../../app/features/FileTreeSlice"

interface IProps {
  setShowMenu:(val:boolean) => void
    positions:{
        x:number
        y:number
    }
}

const ContextMenu = ({positions:{x,y},setShowMenu}:IProps) => {
  const MenuRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch();
  const removAll = () =>{
    dispatch(setOpenFiles([]));
  }

  useEffect(()=>{
    const handlerClickOutside = () =>{
      setShowMenu(false)
    }
    window.addEventListener("click",handlerClickOutside);

    return () =>{
      window.removeEventListener("click",handlerClickOutside)
    }
  },[setShowMenu])
  return (
    <div ref={MenuRef}>
      <ul className="border-2 border-zinc-500
      rounded w-fit cursor-pointer  px-7 py-2"
      style={{
        position:"absolute", top:y,left:x
      }}>
        <li>Close</li>
        <li onClick={removAll}>Close All </li>
      </ul>
    </div>
  )
}

export default ContextMenu
