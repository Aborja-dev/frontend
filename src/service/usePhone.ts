import { useState } from "react"
import * as Service from "./Service"
import { AddPhone, Phone } from "../types/types"

const STATE = {
    ERROR: -1,
    LOADING: 0,
    LOADED: 1
}

export const usePhone = () => {
    const [numbers, setNumbers ] = useState<Phone[]>([])
    const [current, _setCurrent] = useState<Phone | null>(null)
    const [state, setState] = useState(STATE.LOADED)
    const [search, setSearch] = useState('')
    const addPhone = async (newNumber: AddPhone) => {
        setState(STATE.LOADING)
        await Service.addPhone(newNumber)
        await _loadPhones()
        setState(STATE.LOADED)
    }
    const _loadPhones = async () => {
        const result = await Service.loadPhones()
        setNumbers(result)
    }
    const deletePhone = async( id: string) => {
        setState(STATE.LOADING)
        await Service.deletePhone(id)
        await _loadPhones()
        setState(STATE.LOADED)
    }
    const loadPhones = async () => {
        setState(STATE.LOADING)
        await _loadPhones()
        setState(STATE.LOADED)
    }
    const setCurrent = (number: Phone | null) => {
        _setCurrent(number)
    }
    const resetCurrent = () => {
        _setCurrent(null)
    }
    const editPhone = async (number: Phone) => {
        setState(STATE.LOADING)
        await Service.editPhone(number)
        await loadPhones()
        setState(STATE.LOADED)
    }
    return {
        addPhone,
        deletePhone,
        numbers,
        current,
        setCurrent,
        resetCurrent,
        editPhone,
        loadPhones,
        state,
        search,
        setSearch
    }
}

export type PhoneService = ReturnType<typeof usePhone>