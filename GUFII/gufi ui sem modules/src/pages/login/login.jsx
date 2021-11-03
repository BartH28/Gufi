import axios from "axios";
import { Component } from "react";
// import TiposEventos from "../tiposEventos/TiposEventos";
import { parseJwt } from "../../services/auth";
import logo from "../../assets/img/logo.png"
import "../../assets/css/login.css"
import "../../assets/css/reset.css"

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            senha : '',
            errorMensagem : '',
            isLoading : false

        };

    };

    efetualogin = (event) => {
        event.preventDefault();

        this.setState({isLoading : true, errorMensagem : ''})

        axios.post('http://localhost:5000/api/Login', {
            email : this.state.email,
            senha : this.state.senha
        })



        .then(resp => {
            if (resp.status === 200) {
                
                localStorage.setItem('usuario-token', resp.data.token)
                
                localStorage.removeItem('usuario-token')

                console.log(resp.data.token)

                this.setState({isLoading : false})

                let base64 = localStorage.getItem('usuario-token').split('.')[1]

                console.log(parseJwt(base64));
            }
        })
        .catch(() => {
            this.setState({errorMensagem : 'E-mail ou senha invalida', isLoading : false})
            
        })
        
        
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value})

    }

    logout = () =>{
        localStorage.removeItem('usuario-token')

        
    }

    render() {
        return (
            <div>
                <body className="bgColor">
                    
                
                <main>
                    <section className="container-login flex">
                    <div className="img__login"><div className="img__overlay"></div></div>
                    <div className="item__login">
                            <div className="row">
                                <div className="item">
                                    <img src={logo} className="icone__login" alt="logo da Gufi" />
                                </div>
                                <div className="item" id="item__title">
                                    <p className="text__login" id="item__description">
                                        Bem-vindo! Faça login para acessar sua conta.
                                    </p>
                                </div>

                                <form onSubmit={this.efetuaLogin}>
                                    <div className="item">
                                        <input
                                            className="input__login"
                                            // email
                                            type="email"
                                            // obs.: o name do input deve ser igual ao nome da propriedade dentro do objeto state
                                            name="email"
                                            // define que o input email recebe o valor do state email
                                            value={this.state.email}
                                            // faz a chamada para a função que atualiza o state, conforme o usuário altera o valor do input
                                            onChange={this.atualizaStateCampo}
                                            placeholder="username"
                                        />
                                    </div>
                                    <div className="item">
                                        <input
                                            className="input__login"
                                            // senha
                                            type="password"
                                            name="senha"
                                            // define que o input senha recebe o valor do state senha
                                            value={this.state.senha}
                                            // faz a chamada para a função que atualiza o state, conforme o usuário altera o valor do input
                                            onChange={this.atualizaStateCampo}
                                            placeholder="password"
                                        />
                                    </div>
                                    <div className="item">

                                        <p style={{ color: 'red' }} >{this.state.erroMensagem}</p>

                                        {/* 
                                            Verifica se a requisição está em andamento
                                            Se estiver, desabilita o click do botão
                                        */}

                                        {
                                            // caso isLoading seja true, renderiza o botão desabilitado com o texto 'Loading...'
                                            this.state.isLoading === true &&
                                            <button type="submit" disabled className="btn btn__login" id="btn__login">Loading...</button>
                                        }

                                        {
                                            // caso isLoading seja false, renderiza o botão habilitado com o texto 'Login'

                                            this.state.isLoading === false &&
                                            <button
                                                className="btn btn__login" id="btn__login"
                                                type="submit"
                                                disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''}>
                                                Login
                                            </button>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </body>
            </div>
            )
        }
    };