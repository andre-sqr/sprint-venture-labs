import React from 'react'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Button from '../Button/Button'
import style from './Form2.module.css'
import { useContext } from 'react'
import { CustomerContext } from '../../context/CustomersProvider'

const Form2 = () => {

  const {nextPage, backPage, handleChange, dadosForm} = useContext(CustomerContext)

  return (
    <div>
        <form>
        <Label text="CEP" style={style.input}/>
        <Input type="number" 
        style={style.label}
        value={dadosForm.cep}
        handleChange={(e)=>handleChange(e, 'cep')}/>

        <Label text="Endereço 1" style={style.label}/>
        <Input type="text" 
        style={style.input}
        value={dadosForm.enderecoUm}
        handleChange={(e)=>handleChange(e, 'enderecoUm')}/>

        <Label text="Endereço 2" style={style.label}/>
        <Input type="text" 
        style={style.input}
        value={dadosForm.enderecoDois}
        handleChange={(e)=>handleChange(e, 'enderecoDois')}/>
        </form>
        <Button text="Voltar" style={style.btn} onClick={backPage}/>
        <Button text="Próximo" style={style.btn} onClick={nextPage}/>
    </div>
  )
}

export default Form2