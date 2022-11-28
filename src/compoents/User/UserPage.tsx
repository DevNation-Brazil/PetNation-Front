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

function UserPage() {
     // referente ao alert de erro 
     const [activeError, setActiveError] = useState(false)
     const [errorMessage, setErrorMessage] = useState('')


    const auth = useContext(AuthContext);

    const token = auth.userToken
    const tipoToken = auth.tipoToken

    const [pets, setPets] = useState<IAnimal[]>([])

    useEffect(() => {
        axios.get<IAnimal[]>(`http://localhost:8080/api/v1/pet/`)
            .then(resposta => setPets(resposta.data.filter(value => auth.userId == value.userId)))

            .catch(function (error) {
                setActiveError(true)
                setErrorMessage(error)
            })

    }, [])

    const excluir = (petAhSerExcluido: IAnimal) => {
        const conf = window.confirm('Tem certeza que deseja excluir seu pet?')

        if (conf === true) {
            axios.delete(`http://localhost:8080/api/v1/pet/${petAhSerExcluido.id}/`,
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
                        <div className="cardWrapperUser backCardUser" key={petsMapped.id}>
                            <div className="carddUser">
                                <div className="cardImageWrapperUser">
                                    <img className={petsMapped.imageSource ? "cardImageUser" : "cardImageDoguito"} src={petsMapped.imageSource ?? doguito} />
                                </div>
                                <div className="cardBodyUser">
                                    <h3 className="cardTitleUser" key={petsMapped.nome}>{petsMapped.nome}</h3>
                                    <h4 className="cardSubtitleUser" key={petsMapped.sexo}>{petsMapped.sexo}</h4>
                                    <p className="cardTextUser" key={petsMapped.tipo.nome}>Tipo: {petsMapped.tipo.nome}</p>
                                    <p className="cardTextUser" key={petsMapped.raca.nome}>Raça: {petsMapped.raca.nome}</p>
                                    <p className="cardTextUser" key={petsMapped.porte}>Tamanho: {petsMapped.porte}</p>
                                    <div className="idadeEEdit">
                                        <p className="cardTextUser" key={petsMapped.idade}>Idade: {petsMapped.idade} </p>

                                        <div className="userIconsWrapper">
                                            <Link to={`/cadastro/${petsMapped.id}`}>
                                                <span className="iconEditAnimalCardUser">
                                                    <AiOutlineEdit size={25} />
                                                </span>
                                            </Link>

                                            <span className="iconTrashAnimalCardUser">
                                                <BsTrash size={20} onClick={() => excluir(petsMapped)} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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