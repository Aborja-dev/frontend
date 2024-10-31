import { AddPhone, Phone } from "../types/types"
import axios from "axios"
const baseURL = "https://phonebook-back-1pyk.onrender.com"
export const Numbers = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "phone": "+1-555-0101"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "phone": "+1-555-0102"
    },
    {
      "id": 3,
      "name": "Charlie Brown",
      "phone": "+1-555-0103"
    },
    {
      "id": 4,
      "name": "Diana Prince",
      "phone": "+1-555-0104"
    },
    {
      "id": 5,
      "name": "Ethan Hunt",
      "phone": "+1-555-0105"
    },
    {
      "id": 6,
      "name": "Fiona Gallagher",
      "phone": "+1-555-0106"
    },
    {
      "id": 7,
      "name": "George Washington",
      "phone": "+1-555-0107"
    },
    {
      "id": 8,
      "name": "Hannah Montana",
      "phone": "+1-555-0108"
    },
    {
      "id": 9,
      "name": "Ian Malcolm",
      "phone": "+1-555-0109"
    },
    {
      "id": 10,
      "name": "Julia Roberts",
      "phone": "+1-555-0110"
    }
  ]
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
  const response = await axios.get(`${baseURL}/phonebook`)
  return response.data.data.map((number: Response) => ({phone: number.number, name: number.name, id: (number.id)}))
}

export const deletePhone = async (id: number): Promise<void> => {
    await axios.delete(`${baseURL}/phonebook/${id}`)
}

export const editPhone = async ( number: Phone): Promise<void> => {
    await axios.put(`${baseURL}/phonebook/${number.id}`, {
        name: number.name,
        number: number.phone
    })
}