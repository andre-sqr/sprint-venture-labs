import React from 'react'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Button from '../Button/Button'
import style from './Form1.module.css'
import { useContext } from 'react'
import { CustomerContext } from '../../context/CustomersProvider'

const Form1 = () => {

  const {nextPage} = useContext(CustomerContext)

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
        </form>
            <Button text="Próximo" style={style.btn} onClick={nextPage}/>
    </div>
  )
}

export default Form1