import React from "react";
import logo from "../../assets/img/logo.png"

export default function Header(){
    return(
        <header className="cabecalhoPrincipal">
      <div className="container">
        <a href="/"><img  src={logo} alt="Logo da Gufi" /></a>
        <nav className="cabecalhoPrincipal-nav">
          <a href="/">Home</a>
          <a href="/tiposeventos">Eventos</a>
          <a>Contato</a>
          <a className="cabecalhoPrincipal-nav-login" href="login.html">Login</a>
        </nav>
      </div>
    </header>
    )
}