import axios from "axios"
import { useEffect } from "react"
import { IRaca } from "../Interfaces/raca"
import { ITipo } from "../Interfaces/tipo"

interface AutoCompletePorops {
    setTipos: Function
    setPortes: Function
    setRacas: Function
    tipo: any
}

const API_kEY = process.env.REACT_APP_API_KEY

export const useAutoComplete = ({ setTipos, setPortes, setRacas, tipo }: AutoCompletePorops) => {
    useEffect(() => {
        axios.request<ITipo[]>({
            url: `${process.env.REACT_APP_API}/api/v1/tipo`,
            method: 'GET',
            headers: {
                'apikey': `${API_kEY}`
            }})
            .then(resposta => setTipos(resposta.data))

        setPortes(["Pequeno", "Médio", "Grande"])

    }, [])

    useEffect(() => {
        axios.request<IRaca[]>({url: `${process.env.REACT_APP_API}/api/v1/raca`,
        method: 'GET',
        headers: {
            'apikey': `${API_kEY}`
        }})
            .then(resposta => setRacas(resposta.data.filter(value => tipo == value.tipo.nome)))
    }, [tipo])
}