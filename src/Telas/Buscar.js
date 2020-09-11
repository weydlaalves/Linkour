import React from 'react';
import "../Styles/Buscar.css";


class Buscar extends React.Component{
    state = {
        buscar: "",
        error: ""
      };
    render(){
        return (
        
            <div className= "buscares">

             <div><header id="mains-header"> Linkour </header></div>
            
            <div class="buscar">
                

                <form>
                <input
                  type="buscar "
                  placeholder="buscar influencer"
                  onChange={e => this.setState({ buscar: e.target.value }) }
                />

                <div id="botão">
                <button type = "submit">Pesquisar</button>
                </div>

                </form>
                
                
    
            </div>
            
            </div>
        
            )
    }
}

export default Buscar;

