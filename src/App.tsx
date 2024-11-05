import { useContext } from "react"
import { GlobalContext } from "./context/globalProvider"
import Main from "./components/Main"
import Loading from "./components/Loading"

function App() {

  const {state} = useContext(GlobalContext)

  return (
    <>
    <div className="w-full min-h-screen bg-orange-300">
      {state === 0 ? <Loading /> : null}
      <Main className="xl:w-4/5 m-auto pt-12 min-h-screen md:w-5/5 p-4 flex md:flex-row flex-col w-full justify-between" />
    </div>
    </>
  )
}

export default App
