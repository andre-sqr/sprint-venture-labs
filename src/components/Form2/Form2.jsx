import React from 'react'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Button from '../Button/Button'
import style from './Form2.module.css'
import { useContext } from 'react'
import { CustomerContext } from '../../context/CustomersProvider'

const Form2 = () => {

  const {nextPage} = useContext(CustomerContext)

  return (
    <div>
        <form>
        <Label text="CEP" style={style.label}/>
        <Input type="number" style={style.input}/>
        <Label text="Endereço 1" style={style.label}/>
        <Input type="text" style={style.input}/>
        <Label text="Endereço 2" style={style.label}/>
        <Input type="text" style={style.input}/>
        </form>
        <Button text="Próximo" style={style.btn} onClick={nextPage}/>
    </div>
  )
}

export default Form2