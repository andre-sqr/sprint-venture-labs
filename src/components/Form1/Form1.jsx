import React from 'react'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Button from '../Button/Button'
import style from './Form1.module.css'
import { useContext } from 'react'
import { CustomerContext } from '../../context/CustomersProvider'

const Form1 = () => {

  const {nextPage, handleChange, dadosForm} = useContext(CustomerContext)

  return (
    <div>
        <form className={style.form}>
            <Label style={style.label} text="Nome"/>
            <Input type="text" 
            style={style.input}
            value={dadosForm.nome}
            handleChange={(e)=>handleChange(e, 'nome')}/>

            <Label style={style.label} text="Sobrenome"/>
            <Input type="text" 
            style={style.input}
            value={dadosForm.sobrenome}
            handleChange={(e)=>handleChange(e, 'sobrenome')}/>

            <Label style={style.label} text="Email"/>
            <Input type="email" 
            style={style.input}
            value={dadosForm.email}
            handleChange={(e)=>handleChange(e, 'email')}/>
            
            <Label style={style.label} text="Telefone"/>
            <Input type="number" 
            style={style.input}
            value={dadosForm.number}
            handleChange={(e)=>handleChange(e, 'number')}/>
        </form>
            <Button text="Próximo" style={style.btn} onClick={nextPage}/>
    </div>
  )
}

export default Form1