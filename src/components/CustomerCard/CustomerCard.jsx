import React from 'react'

const CustomerCard = ({nome, sobrenome, email, telefone, endereco1, endereco2, nascimento, cpf, renda}) => {
  return (
    <div>
        <h1>{nome} {sobrenome}</h1>
        <p><b>Email: </b>{email}</p>
        <p><b>Telefone: </b>{telefone}</p>
        <p><b>Endereço 1: </b>{endereco1}</p>
        <p><b>Endereço 2: </b>{endereco2}</p>
        <p><b>Data de nascimento: </b>{nascimento}</p>
        <p><b>CPF: </b>{cpf}</p>
        <p><b>Renda mensal: </b>{renda}</p>
    </div>
  )
}

export default CustomerCard