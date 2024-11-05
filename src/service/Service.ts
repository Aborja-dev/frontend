import { AddPhone, Phone, PhoneResponse } from "../types/types"
import axios from "axios"
const baseURL = "https://phonebook-back-1pyk.onrender.com"
export const addPhone = async (newPhone: AddPhone): Promise<Phone> => {
  const response = await axios.post(`${baseURL}/phonebook`, {
    name: newPhone.name,
    number: newPhone.phone
  })
  return response.data.data
}
interface Response {
  id: string,
  number: string,
  name: string
}
export const loadPhones = async (): Promise<Phone[]> => {
  const response = await axios.get<{data: PhoneResponse[]}>(`${baseURL}/phonebook`)
  return response.data.data.map((number: Response) => ({phone: number.number, name: number.name, id: (number.id)}))
}

export const deletePhone = async (id: string): Promise<void> => {
    await axios.delete(`${baseURL}/phonebook/${id}`)
}

export const editPhone = async ( number: Phone): Promise<void> => {
    await axios.put(`${baseURL}/phonebook/${number.id}`, {
        name: number.name,
        number: number.phone
    })
}