import React, { useEffect } from 'react'
import { Phone } from '../types/types'
import { GlobalContext } from '../context/globalProvider'
import Button from './Button'

const CreateForm = ({ onSubmit, defaultValue }: {
  onSubmit: (newPhone:Phone) => void
  defaultValue?: Phone | null
}) => {
  const [name, setName] = React.useState<string>(defaultValue ? defaultValue.name : '')
  const [phone, setPhone] = React.useState<string>(defaultValue ? defaultValue.phone : '')
  const {resetCurrent} = React.useContext(GlobalContext)
  const submitHandler = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formValues = new FormData(e.currentTarget)
    const values = Object.fromEntries(formValues)    
    const newPhone = defaultValue
      ? { id: defaultValue.id, name: values.name as string, phone: values.phone as string } // Si editas, el id viene del valor por defecto
      : { name: values.name as string, phone: values.phone as string }; // Si creas, el id no existe aún
    setName('')
    setPhone('')
    onSubmit(newPhone as Phone); // El "as" ayuda a tipificarlo correctamente para TS
  }
  useEffect(() => {
    setName(defaultValue ? defaultValue.name : '')
    setPhone(defaultValue ? defaultValue.phone : '')
  },[defaultValue])
  return (
    <form onSubmit={submitHandler}>
      <fieldset className='flex flex-col italic font-semibold space-y-4 my-4'>
        <label htmlFor="nombre">Nombre</label>
        <input
        className='border-2 border-orange-900 p-4 rounded-lg' 
        defaultValue={defaultValue ? defaultValue.name: ''} 
        value={name}
        onChange={(e) => setName(e.target.value)} 
        type="text" 
        name='name' />
      </fieldset>
      <fieldset className='flex flex-col italic font-semibold space-y-4 my-4'>
        <label htmlFor="telefono">Telefono</label>
        <input
        className='border-2 border-orange-900 p-4 rounded-lg'  
        defaultValue={defaultValue ? defaultValue.phone : ''} 
        value={phone}
        onChange={(e) => setPhone(e.target.value)} 
        type="text" 
        name='phone' />
      </fieldset>
      <div className='flex py-4 gap-4'>
      <Button className='bg-orange-900 ' type="submit">{defaultValue ? 'Actualizar' : 'Crear'}</Button>
      {
        defaultValue && (
          <Button.Outline bg='orange-900' type="button" onClick={() =>resetCurrent() }>Limpiar</Button.Outline>
        )
      }
      </div>
    </form>
  )
}

export default CreateForm
