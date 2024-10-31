import React, { useEffect } from 'react'
import { Phone } from '../types/types'

const CreateForm = ({ onSubmit, defaultValue }: {
  onSubmit: (newPhone:Phone) => void
  defaultValue?: Phone | null
}) => {
  const [name, setName] = React.useState<string>(defaultValue ? defaultValue.name : '')
  const [phone, setPhone] = React.useState<string>(defaultValue ? defaultValue.phone : '')
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
      <fieldset>
        <label htmlFor="nombre">Nombre</label>
        <input 
        defaultValue={defaultValue ? defaultValue.name: ''} 
        value={name}
        onChange={(e) => setName(e.target.value)} 
        type="text" 
        name='name' />
      </fieldset>
      <fieldset>
        <label htmlFor="telefono">Telefono</label>
        <input 
        defaultValue={defaultValue ? defaultValue.phone : ''} 
        value={phone}
        onChange={(e) => setPhone(e.target.value)} 
        type="text" 
        name='phone' />
      </fieldset>
      <button type="submit">{defaultValue ? 'Actualizar' : 'Crear'}</button>
    </form>
  )
}

export default CreateForm
