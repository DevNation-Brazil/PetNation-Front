import "./AnimalCard.css"
import { useEffect, useState } from "react";
import { IAnimal } from "../../Interfaces/IAnimal";
import Alerts from "../Alerts/Alerts";
import { useRegisteredPets } from "../../hooks/useRegisteredPets";
import Card from "./Card";
import { Pagination } from "@mui/material";

interface Props {
    busca: string;
    filtro: string;
    ordenador: string;
}

function AnimalCards(props: Props) {
    // referente ao alert de erro 
    const [activeError, setActiveError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [pets, setPets] = useState<IAnimal[]>([])
    const [lista, setLista] = useState<IAnimal[] | undefined>([])
    const [itensPerPage, setItensPerPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(0)
  
    const pages = Math.ceil(lista!.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = lista!.slice(startIndex, endIndex)

    useRegisteredPets({ setPets, setLista, setActiveError, setErrorMessage })

    const { busca, filtro, ordenador } = props

    function testaBusca(nome: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(nome)
    }

    function testaFiltro(label: string) {
        const regex = new RegExp(filtro, 'i');
        return regex.test(label)
    }

    function ordenar(novalista: IAnimal[]) {
        switch (ordenador) {
            case 'idade':
                return novalista.sort(function (a, b) {
                    if (Number(a.idade) > Number(b.idade)) return 1
                    if (Number(a.idade) < Number(b.idade)) return -1
                    return 0
                })
            case 'alfabetica':
                return novalista.sort(function (a, b) {
                    if (a.nome.toUpperCase() > b.nome.toUpperCase()) return 1
                    if (a.nome.toUpperCase() < b.nome.toUpperCase()) return -1
                    return 0
                })
            default:
                return novalista
        }
    }

    useEffect(() => {
        setCurrentPage(0)
        const novalista = pets.filter(item => testaFiltro(item.tipo.nome) && testaBusca(item.nome))
        setLista(ordenar(novalista))
    }, [filtro, busca, ordenador])

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page - 1)
      };


    return (
        <div className="colecaoWrapper">

     

            <div className="AnimalCardWrapper">


                {currentItens!.map(item => (
                    <Card key={item.id} {...item} />
                ))}

            </div>

           {/* <div>
                {Array.from(Array(pages), (item, index) => {
                    return <button value={index}
                                    onClick={(e: any) => setCurrentPage(Number(e.target.value))} >
                                {index + 1}
                           </button>
                })}
            </div> */}

            <Pagination
                sx={{marginTop: 2}} 
                count={pages}
                page={currentPage + 1}
                onChange={handlePageChange}
                variant="outlined" 
                color="primary" />

            <Alerts
                active={activeError}
                setActive={setActiveError}
                severity={'error'}
                message={`${errorMessage}`}

            />
        </div>
    );
}

export default AnimalCards;