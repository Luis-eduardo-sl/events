function Form (){
    function cadastrarUsuario(e){
        e.preventDefault();
        console.log("Usuario cadastrado");
    }
    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"></input>
                </div>
                <div>
                    <input type="email" placeholder="Digite seu email"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    );
}

export default Form