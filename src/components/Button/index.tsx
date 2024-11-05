/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { buttoStyles } from './style'

const Button = ({children, className, onClick, ...props}: {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void,
    [key: string]: any
}) => {
  return (
    <button className={buttoStyles['default'] + ' ' + className} {...props} onClick={onClick}>
      {children}
    </button>
  )
}

Button.Outline = ({children, onClick, ...props}: {
    children: React.ReactNode,
    onClick?: () => void,
    [key: string]: any
}) => {
  return (
    <button className={ buttoStyles['outline'] } {...props} onClick={onClick}>
      {children}
    </button>
  )
}

Button.Danger = ({children, onClick, ...props}: {
    children: React.ReactNode,
    onClick?: () => void,
    [key: string]: any
}) => {
  return (
    <button className={ buttoStyles['danger'] } {...props} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
