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


            <div className="topAreaWrapper">

                <div className="topArea">
                    <div className="colecaoTitle" >
                        <TituloPadras texto="Pets Cadastrados" />
                    </div>

                    <div className="sortingArea" >

                        <div className="buscadorOrdenadorArea" >
                            <span className="textSortingArea" >
                                Procure pelo nome do Pet
                            </span>
                            <Buscador busca={busca} setBusca={setBusca} />
                        </div>

                        <div className="filterArea">
                            <span className="textSortingArea" >
                                Filtre pelo tipo do Pet
                            </span>
                            <Filtros filtro={filtro} setFiltro={setFiltros} />
                        </div>

                        <div className="buscadorOrdenadorArea">
                            <span className="textSortingArea" >
                                Ordene por...
                            </span>
                            <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                        </div>
                    </div>
                </div>
            </div>

            <AnimalCards busca={busca} filtro={filtro} ordenador={ordenador} />
        </>
    );
}

export default Colecao;