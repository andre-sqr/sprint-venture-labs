import React, { createContext, useState } from "react";

export const CustomerContext = createContext()

const CustomersProvider = ({children}) => {

  const [dadosForm, setDadosForm] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    cep: '',
    enderecoUm: '',
    enderecoDois: '',
    nascimento: '',
    cpf: '',
    renda: ''
  })

  const [page, setPage] = useState(0)

  const [clientes, setClientes] = useState([])

  let nextPage = (e) => {
    e.preventDefault()
    setPage(page + 1)
  }

  let backPage = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }

  let handleChange = (e, keyname) => {
    setDadosForm({...dadosForm, [keyname]: e.target.value})
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    setClientes([...clientes, dadosForm])
    setDadosForm({
      nome: '',
      sobrenome: '',
      email: '',
      telefone: '',
      cep: '',
      enderecoUm: '',
      enderecoDois: '',
      nascimento: '',
      cpf: '',
      renda: ''
    })
    setPage(0)
  }

  const contexto = {
    dadosForm: dadosForm,
    page: page,
    nextPage: nextPage,
    backPage: backPage,
    handleChange: handleChange,
    handleSubmit: handleSubmit
  }

  return (
    <CustomerContext.Provider value={contexto}>
        {children}
    </CustomerContext.Provider>
  )
}

export default CustomersProvider