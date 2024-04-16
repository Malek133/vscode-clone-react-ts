interface IProps{
src:string
}

const IconeImage= ({src}:IProps) => {
  return (
    <>
    <img src={src} 
    className="w-6 h-6 mx-1" />
    </>
  )
}

export default IconeImage