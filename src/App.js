import React from 'react';
import './App.css';
import TelaLogin from './Telas/TelaLogin.js';
import CadastroLink from './Telas/CadastroLink';
import { BrowserRouter, Route } from 'react-router-dom';
    function App() {
      return (
      <div className= "app">
        <BrowserRouter>
          <Route exact path = '/'>
            <TelaLogin></TelaLogin>
            
          </Route>

          <Route path = '/cadastro'>
           <CadastroLink></CadastroLink>
          </Route>
          
        </BrowserRouter>
        
      </div>
      );
    }
    


export default App;
