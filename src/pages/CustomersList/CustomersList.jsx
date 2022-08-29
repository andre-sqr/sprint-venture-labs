import React, { useContext } from 'react'
import style from './CustomersList.module.css'
import CustomerCard from '../../components/CustomerCard/CustomerCard'
import { CustomerContext } from '../../context/CustomersProvider'


const CustomersList = () => {

  const {clientes} = useContext(CustomerContext)

  return (
    <div className={style.main}>
      <h1>Clientes cadastrados:</h1>
      <div>
        { clientes.length > 0 ? clientes.map((cliente, index)=> {
          return (
            <CustomerCard
            key={index}
            nome={cliente.nome}
            sobrenome={cliente.sobrenome}
            email={cliente.email}
            telefone={cliente.telefone}
            endereco1={cliente.enderecoUm}
            endereco2={cliente.enderecoDois}
            nascimento={cliente.nascimento}
            cpf={cliente.cpf}
            renda={cliente.renda}/>
          )
        }) : <h3>Nada foi encontrado</h3>}
      </div>
    </div>
  )
}

export default CustomersList