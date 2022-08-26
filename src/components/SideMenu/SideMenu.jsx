import React from 'react'
import { Link } from 'react-router-dom'
import S from './SideMenu.module.css'

const SideMenu = () => {
  return (
    <div className={S.sideMenu}>
        <nav className={S.nav}>
            <Link className={S.link} to='/'>Home</Link>
            <Link className={S.link} to='/register'>Cadastro</Link>
            <Link className={S.link} to='/customers'>Clientes</Link>
        </nav>
    </div>
  )
}

export default SideMenu