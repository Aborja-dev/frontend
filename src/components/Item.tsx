
import { useContext } from 'react'
import { Phone } from '../types/types'
import { GlobalContext } from '../context/globalProvider'
import Button from './Button'

const Item = ({ number }: {
  number: Phone
}) => {
  const { deletePhone, setCurrent } = useContext(GlobalContext)
  const onDelete = (id: number) => deletePhone(id)
  const onEdit = () => setCurrent(number)
  return (
    <li className='flex justify-between items-center'>
      <div className='flex gap-2'>
      <span>{number.name} </span>
      <strong>{number.phone}</strong>
      </div>
      <div className='flex gap-4'>
        <Button className='bg-orange-900' onClick={onEdit}>Editar</Button>
        <Button.Danger onClick={() => onDelete(+number.id)}>Eliminar</Button.Danger>
      </div>
    </li>
  )
}

export default Item
