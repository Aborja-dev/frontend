import { AddPhone, Phone } from "../types/types"
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
export const addPhone = (newPhone: AddPhone): Phone => {
  return {
    id: Math.floor(Math.random() * 1000),
    ...newPhone
  }
}

export const loadPhones = (): Phone[] => Numbers

export const deletePhone = (numbers: Phone[], id: number): Phone[] => {
    return numbers.filter(number => number.id !== id)
}

export const editPhone = (numbers: Phone[], number: Phone): Phone[] => {
    return numbers.map(item => item.id === number.id ? number : item)
}