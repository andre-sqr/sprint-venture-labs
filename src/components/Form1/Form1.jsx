import React from 'react'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Button from '../Button/Button'
import style from './Form1.module.css'

const Form1 = () => {
  return (
    <div>
        <form className={style.form}>
            <Label style={style.label} text="Nome"/>
            <Input type="text" style={style.input}/>
            <Label style={style.label} text="Sobrenome"/>
            <Input type="text" style={style.input}/>
            <Label style={style.label} text="Email"/>
            <Input type="email" style={style.input}/>
            <Label style={style.label} text="Telefone"/>
            <Input type="number" style={style.input}/>
            <Button text="Próximo" style={style.btn}/>
        </form>
    </div>
  )
}

export default Form1