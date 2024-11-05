import  { useContext } from 'react'
import List from './List'
import CreateForm from './CreateForm'
import Searchbar from './Searchbar'
import { AddPhone, Phone } from '../types/types'
import { GlobalContext } from '../context/globalProvider'

const Main = ({ className }: { className?: string }) => {
    const { numbers, addPhone, current, editPhone, resetCurrent } = useContext(GlobalContext)
    const addNumberHandler = (newPhone: AddPhone) => addPhone(newPhone)
    const editNumberHandler = (newPhone: Phone) => {
        editPhone(newPhone)
        resetCurrent()
    }
    return (
        <main className={className}>
            <div className='lg:w-2/5 p-4 w-full '>
            <h2 className='text-2xl italic font-bold'>Crear/actualizar numero</h2>
                {
                    current
                    ? <CreateForm defaultValue={current} onSubmit={editNumberHandler} />
                    : <CreateForm onSubmit={addNumberHandler} />
                    
                }
            </div>
            <div className='lg:w-2/5 p-4 w-full'>
                <Searchbar />
                <List numbers={numbers} />
            </div>
        </main>
    )
}

export default Main
