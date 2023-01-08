import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auto/AuthContext";
import { IAnimal } from "../../Interfaces/IAnimal";
import doguito from "../../assets/doguito.svg"
import TituloPadras from "../TituloPadras/TituloPadras";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import "./UserPage.css"
import { Link } from "react-router-dom";
import Alerts from "../Alerts/Alerts";
import Card from "../Colecao/Card";

const API_kEY = process.env.REACT_APP_API_KEY

function UserPage() {
    // referente ao alert de erro 
    const [activeError, setActiveError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const auth = useContext(AuthContext);

    const token = auth.userToken
    const tipoToken = auth.tipoToken

    const [pets, setPets] = useState<IAnimal[]>([])

    useEffect(() => {
        axios.request<IAnimal[]>({
            url: `${process.env.REACT_APP_API}/api/v1/key/pet`,
            method: 'GET',
            headers: {
                'apikey': `${API_kEY}`
            }
        })
            .then(resposta => setPets(resposta.data.filter(value => auth.userId == value.userId)))

            .catch(function (error) {
                setActiveError(true)
                setErrorMessage(error.response.status)
            })

    }, [])

    const excluir = (petAhSerExcluido: IAnimal) => {
        const conf = window.confirm('Tem certeza que deseja excluir seu pet?')

        if (conf === true) {
            axios.delete(`${process.env.REACT_APP_API}/api/v1/pet/${petAhSerExcluido.id}/`,
                {
                    headers: {
                        'Authorization': `${tipoToken} ${token}`
                    },
                })
                .then(() => {
                    const listarpet = pets.filter(pet => pet.id !== petAhSerExcluido.id)
                    setPets([...listarpet])
                })
        }
    }

    return (
        <div>
            <div className="userPageWrapper">

                <TituloPadras texto={`Olá ${auth.user}`} />

            </div>

            <div className="colecaoWrapper">

                <TituloPadras texto="Seus Pets Cadastrados" />

                <div className="AnimalCardWrapperUser">


                    {pets.map(petsMapped =>
                        <Card
                            key={petsMapped.id}
                            id={petsMapped.id}
                            imageSource={petsMapped.imageSource}
                            nome={petsMapped.nome}
                            sexo={petsMapped.sexo}
                            tipo={{ nome: petsMapped.tipo.nome }}
                            raca={{ nome: petsMapped.raca.nome, tipo: { nome: petsMapped.raca.tipo.nome } }}
                            porte={petsMapped.porte}
                            idade={petsMapped.idade}
                            userName={petsMapped.userName}
                            inconEdit={<AiOutlineEdit size={25} />}
                            inconTrash={<BsTrash size={20} onClick={() => excluir(petsMapped)} />}
                        />
                    )}

                </div>
            </div>

            <Alerts
                active={activeError}
                setActive={setActiveError}
                severity={'error'}
                message={`${errorMessage}`}

            />
        </div>
    );
}

export default UserPage;