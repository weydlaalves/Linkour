import React, { Component } from 'react';
import "../Styles/Perfil.css";
import "../Comum/Navegador"

class Perfil extends Component{
    state = {
        avatar:"",
        username: "",
        socials: ""
        };
    render(){
        return (
            <div class= "header">
                <div>
                <img
                    class="avatar"
                    src="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg">
                </img>  
                <h1 class="username">Marcos Aurelio</h1>    
                </div> 

                <ul class="socials">
                    <li>
                        <a href="https://www.behance.net/nathannaelsilva1" target ="blank" class="btn btn1">Behance</a>
                    </li>
                    <li>
                        <a href="https://br.pinterest.com/nathannaelsilva/boards/" target ="blank" class="btn btn2">Pinterest</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/alltogether_tgt/" target ="blank" class="btn btn3">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/nathannael.silva.39/" target ="blank" class="btn btn4">Facebook</a>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Perfil;