import axios from "axios"
import { Params } from "react-router-dom"
import { AuthContextType } from "../contexts/Auto/AuthContext"
import { IUser } from "../Interfaces/IUser"

interface AoEnviarProps {
    sexoDoAnimal: string
    nome: string
    tipo: any
    raca: any
    porte: any
    idade: string
    auth: AuthContextType
    image: File | null | string
    errorNome: any
    parametros: Readonly<Params<string>>
    tipoToken: string | IUser | null
    token: string | IUser | null
    setPreview: Function
    setSexoDoAnimal: Function
    setNome: Function
    setTipo: Function
    setRaca: Function
    setPorte: Function
    setIdade: Function
    setActive: Function
    setActiveError: Function
    setErrorMessage: Function
}

export const aoEnviarFunc = ({
    sexoDoAnimal, nome, tipo, raca, 
    porte, idade, auth, image, errorNome, 
    parametros, tipoToken, token,
    setPreview, setSexoDoAnimal, setNome, 
    setTipo, setRaca, setPorte, setIdade, 
    setActive, setActiveError, setErrorMessage }: AoEnviarProps) => {

    const petObject = {
        sexo: sexoDoAnimal,
        nome: nome,
        tipo: {
            nome: tipo
        },
        raca: {
            nome: raca
        },
        porte: porte,
        idade: idade,
        userId: auth.userId,
        userName: auth.user
    }

    const json = JSON.stringify(petObject);
    const blob = new Blob([json], {
        type: 'application/json'
    });

    const formDataPet: any = new FormData();
    formDataPet.append("DTO", blob)

    if (image) {
        formDataPet.append("file", image)
    }

    if (errorNome.nome.valido) {
        if (parametros.id) {

            axios.request({
                url: `${process.env.REACT_APP_API}/api/v1/pet/${parametros.id}/`,
                method: 'PATCH',
                headers: {
                    'Authorization': `${tipoToken} ${token}`
                },
                data: formDataPet
            })
                .then(() => {
                    setPreview('')
                    setSexoDoAnimal('')
                    setNome('')
                    setTipo('')
                    setRaca('')
                    setPorte('')
                    setIdade('')
                    setActive(true)
                })
                .catch(function (error) {
                    setActiveError(true)
                    setErrorMessage(error.response.data)
                })

        } else {
            axios.request({
                url: `${process.env.REACT_APP_API}/api/v1/pet`,
                method: 'POST',
                headers: {
                    'Authorization': `${tipoToken} ${token}`
                },
                data: formDataPet
            })
                .then(() => {
                    setPreview('')
                    setSexoDoAnimal('')
                    setNome('')
                    setTipo('')
                    setRaca('')
                    setPorte('')
                    setIdade('')
                    setActive(true)
                })
                .catch(function (error) {
                    setActiveError(true)
                    setErrorMessage(error.response.status)
                })
        }
    }
}