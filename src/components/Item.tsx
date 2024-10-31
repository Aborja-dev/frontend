
import { useContext } from 'react'
import { Phone } from '../types/types'
import { GlobalContext } from '../context/globalProvider'

const Item = ({number}: {
  number: Phone
}) => {
  const {deletePhone, setCurrent} = useContext(GlobalContext)
  const onDelete = (id: number) => deletePhone(id)
  const onEdit = () => setCurrent(number)
  return (
    <li>
      <span>{number.name} </span>
      <strong>{number.phone}</strong>
      <button onClick={() => onDelete(number.id)}>Eliminar</button>
      <button onClick={onEdit}>Editar</button>
    </li>
  )
}

export default Item
