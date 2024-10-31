import { useContext } from "react"
import CreateForm from "./components/CreateForm"
import List from "./components/List"
import Searchbar from "./components/Searchbar"
import { AddPhone, Phone } from "./types/types"
import { GlobalContext } from "./context/globalProvider"


function App() {

  const {numbers, addPhone, current, editPhone, resetCurrent} = useContext(GlobalContext)
  const addNumberHandler = (newPhone: AddPhone) => addPhone(newPhone)
  const editNumberHandler = (newPhone: Phone) => {
    editPhone(newPhone)
    resetCurrent()
  }
  return (
    <>
      <Searchbar />
      {
        current 
        ? <CreateForm defaultValue={current} onSubmit={editNumberHandler} />
        : <CreateForm onSubmit={addNumberHandler} />


      }
      <List numbers={numbers} />
    </>
  )
}

export default App
