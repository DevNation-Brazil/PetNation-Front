import opcoes from "./opcoes.json"
import "./Ordenador.css"

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

function Ordenador({ ordenador, setOrdenador }: Props) {

    function selecionarFiltro (opcao: string) {
        if (ordenador === opcao) return setOrdenador('')
        return setOrdenador(opcao);
    }

    return (
        <div> {opcoes.map(opcao => (

            <button className={`botaoOrdenador ${ordenador === opcao.value ? "botaoOrdenadorAtivo" : ""}`}
                onClick={() => selecionarFiltro(opcao.value)}
                key={opcao.value}>
                {opcao.nome}
            </button>
        ))}
        </div>
    );
}

export default Ordenador;