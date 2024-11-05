import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalProvider'

const Searchbar = () => {
  const {search, setSearch} = useContext(GlobalContext)
  return (
    <div className='w-full'>
      <h3 className='text-2xl italic font-bold mb-4'>Buscar numero</h3>
      <input
        type="text"
        value={search}
        className='border-2 border-orange-900 p-2 w-full rounded-lg mb-4'
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Searchbar
