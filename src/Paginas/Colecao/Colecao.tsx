import { useState } from "react";
import "./Colecao.css"
import Buscador from "../../compoents/Buscador/Buscador";
import AnimalCards from "../../compoents/Colecao/AnimalCards";
import Filtros from "../../compoents/Filtros/Filtros";
import Header from "../../compoents/Header/Header";
import NavMenu from "../../compoents/NavMenu/NavMenu";
import Ordenador from "../../compoents/Ordenador/Ordenador";
import TituloPadras from "../../compoents/TituloPadras/TituloPadras";


function Colecao() {
    const [busca, setBusca] = useState("")
    const [filtro, setFiltros] = useState<string>('')
    const [ordenador, setOrdenador] = useState('')

    return (
        <>
            <NavMenu />
            <Header />
            
            
            <div className="sortingAreaWrapper">
           
                <div className="sortingArea">
                <TituloPadras texto="Pets Cadastrados" />
                
                    <Buscador busca={busca} setBusca={setBusca} />
                    <div>
                        <Filtros filtro={filtro} setFiltro={setFiltros} />
                    </div>
                    <div className="ordenadorArea">
                        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                    </div>
                </div>
            </div>

            <AnimalCards busca={busca} filtro={filtro} ordenador={ordenador} />
        </>
    );
}

export default Colecao;