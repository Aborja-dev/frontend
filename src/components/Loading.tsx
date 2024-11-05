import ReactLogo from "../assets/react.svg";
const Loading = () => {
  return (
    <>
    <div className='place-items-center absolute top-0 left-0 w-full opacity-30 h-full bg-slate-400 text-white'>
    </div>
         <img src={ReactLogo} className="
         w-64 
         absolute 
         top-[30%]   
         left-[43%]
         animate-spin
         " alt="react logo" />
        <p className='absolute top-3/4 left-[45%] text-5xl text-white opacity-1'>Loading...</p>
    </>
  )
}

export default Loading
