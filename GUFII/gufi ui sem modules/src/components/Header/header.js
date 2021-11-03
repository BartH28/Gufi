import React from "react";
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header className="cabecalhoPrincipal">
      <div className="container">
        <Link to="/"><img  src={logo} alt="Logo da Gufi" /></Link>
        <nav className="cabecalhoPrincipal-nav">
          <Link to="/">Home</Link>
          <Link to="/tiposeventos">Eventos</Link>
          <Link >Contato</Link>
          <Link className="cabecalhoPrincipal-nav-login" to="/login">Login</Link>
        </nav>
      </div>
    </header>
    )
}