import axios from "axios"
import { useEffect } from "react"
import { IAnimal } from "../Interfaces/IAnimal"

interface RegisteredPetsProps {
    setPets: Function
    setLista: Function
    setActiveError: Function
    setErrorMessage: Function
}

const API_kEY = process.env.REACT_APP_API_KEY

export const useRegisteredPets = ({ setPets, setLista, setActiveError, setErrorMessage }: RegisteredPetsProps) => {
    useEffect(() => {
        axios.request<IAnimal[]>({
            url: `${process.env.REACT_APP_API}/api/v1/key/pet`,
            method: 'GET',
            headers: {
                'apikey': `${API_kEY}`
            }
        })
            .then(resposta => setPets(resposta.data))

            .catch(function (error) {
                setActiveError(true)
                setErrorMessage(error.response.status)
            })

    }, [])

    useEffect(() => {
        axios.request<IAnimal[]>({
            url: `${process.env.REACT_APP_API}/api/v1/key/pet`,
            method: 'GET',
            headers: {
                'apikey': `${API_kEY}`
            }
        })
            .then(resposta => setLista(resposta.data))

            .catch(function (error) {
                setActiveError(true)
                setErrorMessage(error.response.status)
            })

    }, [])
}