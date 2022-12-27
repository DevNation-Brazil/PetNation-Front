import * as React from 'react';
import filtros from "./filtros.json"
import "./Filtros.css"

type IOpcao = typeof filtros[0];

interface Props {
    filtro: string;
    setFiltro: React.Dispatch<React.SetStateAction<string>>
}

function Filtros ({ filtro, setFiltro }: Props)  {

    function selecionarFiltro (opcao: string) {
        if (filtro === opcao) return setFiltro('')
        return setFiltro(opcao);
    }

    return (
        <div>
            {filtros.map((opcao) => (
                <button 
                    className={`botaoFiltro ${filtro === opcao.label ? "botaoFiltroAtivo" : ""}`}
                    key={opcao.id} 
                    onClick={() => selecionarFiltro(opcao.label)}
                     >
                    {opcao.label}
                </button>
            ))}
        </div>
    );
}

export default Filtros;