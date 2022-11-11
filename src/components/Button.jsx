import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick} className={`px-10  py-2  text-white ${props.className}  hover:opacity-80 flex justify-center items-center`} disabled={props.disabled}>{props.children}</button>

  )
}

export default Button