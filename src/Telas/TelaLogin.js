import React, { Component } from 'react';
import './TelaLogin.css';
import { Form, Container } from "../Styles/styles";

    
class TelaLogin extends Component {
    state = {
        email: "",
        password: "",
        error: ""
      };
    render() {
        return (
            <Container>
            <Form onSubmit>
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
              <a href="url">Criar conta</a>
              
            </Form>
            
            
          </Container>
          
        )
    }
}

export default TelaLogin;
