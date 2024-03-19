function Botao ({num}) {
    function meuEvento() {
        console.log(`botao foi clicado ${num}`);
    }

    return(
        <div>
            <button onClick={meuEvento}>Aperta ai</button>
        </div>
    );
}

export default Botao