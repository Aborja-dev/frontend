import { useState } from "react"
import * as Service from "./Service"
import { AddPhone, Phone } from "../types/types"

export const usePhone = () => {
    const [numbers, setNumbers ] = useState<Phone[]>(Service.loadPhones())
    const [current, _setCurrent] = useState<Phone | null>(null)
    const addPhone = (newNumber: AddPhone) => {
        const result = Service.addPhone(newNumber)
        setNumbers((prevState) =>([...prevState, result]))
    }
    const deletePhone = ( id: number) => {
        const result = Service.deletePhone(numbers, id)
        setNumbers(result)
    }
    const setCurrent = (number: Phone | null) => {
        _setCurrent(number)
    }
    const resetCurrent = () => {
        _setCurrent(null)
    }
    const editPhone = (number: Phone) => {
        const result = Service.editPhone(numbers, number)
        setNumbers(result)
    }
    return {
        addPhone,
        deletePhone,
        numbers,
        current,
        setCurrent,
        resetCurrent,
        editPhone
    }
}

export type PhoneService = ReturnType<typeof usePhone>