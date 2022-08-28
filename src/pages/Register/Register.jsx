import React from 'react'
import Form1 from '../../components/Form1/Form1'
import Form2 from '../../components/Form2/Form2'
import Form3 from '../../components/Form3/Form3'
import S from './Register.module.css'
import { useContext } from 'react'
import { CustomerContext } from '../../context/CustomersProvider'

const Register = () => {

  const {page} = useContext(CustomerContext)

  return (
    <div className={S.main}>
      {page === 0 && <Form1/>}
      {page === 1 && <Form2/>}
      {page === 2 && <Form3/>}
    </div>
  )
}

export default Register