import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'
import style from './Form3.module.css'
import { useContext } from 'react'
import { CustomerContext } from '../../context/CustomersProvider'

const Form3 = () => {

  const {backPage} = useContext(CustomerContext)

  return (
    <div>
        <form>
        <Label text="Data de nascimento" style={style.label}/>
        <Input type="date" style={style.input}/>
        <Label text="CPF" style={style.label}/>
        <Input type="number" style={style.input}/>
        </form>
        <Button text="Voltar" style={style.btn} onClick={backPage}/>
        <Button text="Salvar" style={style.btn}/>
    </div>
  )
}

export default Form3