import { useState } from "react";

function Form (){
    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(nome);
        console.log("Usuario cadastrado");
    };

    const[nome, setNome] = useState()

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input
                     type="text" 
                     id="nome"
                     name="nome"
                     value={nome}
                     placeholder="Digite seu nome"
                     onChange={(e)=> setNome(e.target.value)}
                     ></input>
                </div>
                <div>
                    <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Digite seu email"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    );
}

export default Form