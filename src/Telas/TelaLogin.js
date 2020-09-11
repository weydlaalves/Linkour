import React, { Component } from 'react';
import '../Styles/TelaLogin.css'

class TelaLogin extends Component {
    state = {
        email: "",
        password: "",
        error: ""
      };
    render() {
        return (
            <div className = "telalogin">
              
              <form onSubmit>
                
                {this.state.error && <p>{this.state.error}</p>}
                <input
                  type="email"
                  placeholder="Endereço de e-mail"
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  onChange={e => this.setState({ password: e.target.value })}
                />    
              <button type="submit">Entrar</button>
              <a href="url">Esqueceu a senha?</a>
              <a href="http://localhost:3000/cadastro">Criar conta</a>
            </form>
          </div>
        )
    }
}
export default TelaLogin;