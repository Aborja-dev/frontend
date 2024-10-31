import { useState } from "react"
import * as Service from "./Service"
import { AddPhone, Phone } from "../types/types"

export const usePhone = () => {
    const [numbers, setNumbers ] = useState<Phone[]>([])
    const [current, _setCurrent] = useState<Phone | null>(null)
    const addPhone = async (newNumber: AddPhone) => {
        await Service.addPhone(newNumber)
        await loadPhones()
    }
    const loadPhones = async () => {
        const result = await Service.loadPhones()
        setNumbers(result)
    }
    const deletePhone = async( id: number) => {
        await Service.deletePhone(id)
        await loadPhones()
    }
    const setCurrent = (number: Phone | null) => {
        _setCurrent(number)
    }
    const resetCurrent = () => {
        _setCurrent(null)
    }
    const editPhone = async (number: Phone) => {
        await Service.editPhone(number)
        await loadPhones()
    }
    return {
        addPhone,
        deletePhone,
        numbers,
        current,
        setCurrent,
        resetCurrent,
        editPhone,
        loadPhones
    }
}

export type PhoneService = ReturnType<typeof usePhone>