import React from 'react'

const Input = ({style, type, handleChange, value}) => {
  return (
    <input type={type} className={style} onChange={handleChange} value={value}></input>
  )
}

export default Input