import axios from "axios"
import { useEffect } from "react"
import { Params } from "react-router-dom"
import { IAnimal } from "../Interfaces/IAnimal"

interface EditPetFillProps {
    parametros: Readonly<Params<string>>
    setImage: Function
    setSexoDoAnimal: Function
    setNome: Function
    setTipo: Function
    setRaca: Function
    setPorte: Function
    setIdade: Function
}

const API_kEY = process.env.REACT_APP_API_KEY

export const useEditPetFill = ({
    parametros, setImage,
    setSexoDoAnimal, setNome,
    setTipo, setRaca,
    setPorte, setIdade }: EditPetFillProps) => {

    useEffect(() => {
        if (parametros.id) {
            axios.request<IAnimal>({
                url: `${process.env.REACT_APP_API}/api/v1/key/pet/${parametros.id}/`,
                method: 'GET',
                headers: {
                    'apikey': `${API_kEY}`
                }
            })
                .then(resposta => setImage(resposta.data.imageSource))

            axios.request<IAnimal>({
                url: `${process.env.REACT_APP_API}/api/v1/key/pet/${parametros.id}/`,
                method: 'GET',
                headers: {
                    'apikey': `${API_kEY}`
                }
            })
                .then(resposta => setSexoDoAnimal(resposta.data.sexo))

            axios.request<IAnimal>({
                url: `${process.env.REACT_APP_API}/api/v1/key/pet/${parametros.id}/`,
                method: 'GET',
                headers: {
                    'apikey': `${API_kEY}`
                }
            })
                .then(resposta => setNome(resposta.data.nome))

            axios.request<IAnimal>({
                url: `${process.env.REACT_APP_API}/api/v1/key/pet/${parametros.id}/`,
                method: 'GET',
                headers: {
                    'apikey': `${API_kEY}`
                }
            })
                .then(resposta => setTipo(resposta.data.tipo.nome))

            axios.request<IAnimal>({
                url: `${process.env.REACT_APP_API}/api/v1/key/pet/${parametros.id}/`,
                method: 'GET',
                headers: {
                    'apikey': `${API_kEY}`
                }
            })
                .then(resposta => setRaca(resposta.data.raca.nome))

            axios.request<IAnimal>({
                url: `${process.env.REACT_APP_API}/api/v1/key/pet/${parametros.id}/`,
                method: 'GET',
                headers: {
                    'apikey': `${API_kEY}`
                }
            })
                .then(resposta => setPorte(resposta.data.porte))

            axios.request<IAnimal>({
                url: `${process.env.REACT_APP_API}/api/v1/key/pet/${parametros.id}/`,
                method: 'GET',
                headers: {
                    'apikey': `${API_kEY}`
                }
            })
                .then(resposta => setIdade(resposta.data.idade))
        }

    }, [parametros])
}