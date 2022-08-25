import React from 'react'
import { Link } from 'react-router-dom'
import S from './SideMenu.module.css'

const SideMenu = () => {
  return (
    <div className={S.sideMenu}>
        <nav className={S.nav}>
            <Link to='/'>Home</Link>
            <Link to='/register'>Cadastro</Link>
            <Link to='/customers'>Clientes</Link>
        </nav>
    </div>
  )
}

export default SideMenu