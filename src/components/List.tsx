
import { useContext, useEffect, useState } from 'react'
import { Phone } from '../types/types'
import Item from './Item'
import { GlobalContext } from '../context/globalProvider'

const List = ({numbers}: {numbers: Phone[]}) => {
  const [list, setList] = useState<Phone[]>(numbers)
  const {search} = useContext(GlobalContext)
  useEffect(() => {
    const newList = numbers.filter(number => number.name.toLowerCase().includes(search.toLowerCase()))
    setList(newList)
  }, [search, numbers])
  return (
    <div className='space-y-4'>
      {
        list.length === 0
        ? <p>No hay resultados</p>
        : list.map(number => <Item number={number} key={number.id} />)
      }
    </div>
  )
}

export default List
