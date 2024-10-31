
import { Phone } from '../types/types'
import Item from './Item'

const List = ({numbers}: {numbers: Phone[]}) => {
  return (
    <div>
      {
        numbers.map(number => <Item number={number} key={number.id} />)
      }
    </div>
  )
}

export default List
