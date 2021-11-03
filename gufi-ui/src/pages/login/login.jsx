import axios from "axios";
import { Component } from "react";
// import TiposEventos from "../tiposEventos/TiposEventos";

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
            }
        })
        .catch(() => {
            this.setState({errorMensagem : 'E-mail ou senha invalida', isLoading : false})
            
        })
        
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value})

    }

    render() {
        return (
            <div>
                <main>
                    <section>

                        <p>Bem vindo (a)! <br /> Faça login para acessar a sua conta. </p>
                        <form onSubmit={this.efetualogin}>
                            <input type="email" name="email" value={this.state.email} onChange={this.atualizaStateCampo} placeholder="username" />
                            
                            <input type="password" name="senha" value={this.state.s} onChange={this.atualizaStateCampo} placeholder="senha" />
                            
                            <p style={{color : 'red'}}>{this.state.errorMensagem}</p>
                            
                            {
                                this.state.isLoading === true &&
                                <button type="sumit" disabled>Loading...</button>
                            }
                            {
                                this.state.isLoading === false &&
                                <button type="submit" disabled={this.state.email === '' ||  this.state.senha === '' ? 'none': ''}>Login</button>
                            }
                            
                        </form>
                    </section>
                </main>
            </div>
        )
    }
};