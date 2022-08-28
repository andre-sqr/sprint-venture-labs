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
    cpf: ''
  })

  const [page, setPage] = useState(0)

  let nextPage = (e) => {
    e.preventDefault()
    setPage(page + 1)
  }

  let backPage = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }

  const contexto = {
    dadosForm: dadosForm,
    page: page,
    nextPage: nextPage,
    backPage: backPage
  }

  return (
    <CustomerContext.Provider value={contexto}>
        {children}
    </CustomerContext.Provider>
  )
}

export default CustomersProvider