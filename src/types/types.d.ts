export interface Phone {
    id: number | string
    name: string
    phone: string
  }

  export interface AddPhone {
    name: string
    phone: string
  }

export interface PhoneResponse {
    id: string
    name: string
    number: string
}