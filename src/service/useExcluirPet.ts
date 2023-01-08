import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../contexts/Auto/AuthContext"
import { IAnimal } from "../Interfaces/IAnimal"

export const useExcluirPet = (petAhSerExcluido: IAnimal) => {
    
    const auth = useContext(AuthContext)

    const token = auth.userToken
    const tipoToken = auth.tipoToken
    
    const conf = window.confirm('Tem certeza que deseja excluir seu pet?')

    if (conf === true) {
        axios.delete(`${process.env.REACT_APP_API}/api/v1/pet/${petAhSerExcluido.id}/`,
            {
                headers: {
                    'Authorization': `${tipoToken} ${token}`
                },
            })
            
    }
}