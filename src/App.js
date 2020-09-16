import React from 'react';
import './App.css';
import TelaLogin from './Telas/TelaLogin.js';
import CadastroLink from './Telas/CadastroLink';
import { BrowserRouter, Route } from 'react-router-dom';
import Buscar from './Telas/Buscar.js';
    
function App() {
      return (
      <div className= "app">
        <BrowserRouter>
          <Route exact path = '/'>
            <TelaLogin></TelaLogin>
          </Route>
          <Route path = '/buscar'>
            <Buscar></Buscar>
          </Route>
          <Route path = '/addlink'>
           <CadastroLink></CadastroLink>
          </Route>
        </BrowserRouter> 
      </div>
      );
    }
export default App;
