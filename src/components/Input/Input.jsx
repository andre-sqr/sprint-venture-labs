import React from 'react'

const Input = ({style, type, onChange, value}) => {
  return (
    <input type={type} className={style} onChange={onChange} value={value}></input>
  )
}

export default Input