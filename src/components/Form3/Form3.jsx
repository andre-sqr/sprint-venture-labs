import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'
import style from './Form3.module.css'
import { useContext } from 'react'
import { CustomerContext } from '../../context/CustomersProvider'

const Form3 = () => {

  const {backPage, handleChange, dadosForm, handleSubmit} = useContext(CustomerContext)

  return (
    <div>
        <form>
        <Label text="Data de nascimento" style={style.label}/>
        <Input type="date" 
        style={style.input}
        value={dadosForm.nascimento}
        handleChange={(e)=>handleChange(e, 'nascimento')}/>

        <Label text="CPF" style={style.label}/>

        <Input type="number" 
        style={style.input}
        value={dadosForm.cpf}
        handleChange={(e)=>handleChange(e, 'cpf')}/>

        <Label text="Renda mensal" style={style.label}/>
        <Input type="number"
        style={style.input}
        value={dadosForm.renda}
        handleChange={(e)=>handleChange(e, 'renda')}/>
        </form>
        <Button text="Voltar" style={style.btn} onClick={backPage}/>
        <Button text="Salvar" style={style.btn} onClick={handleSubmit}/>
    </div>
  )
}

export default Form3