import React from 'react'

const Label = ({text, style}) => {
  return (
    <label className={style}>{text}</label>
  )
}

export default Label