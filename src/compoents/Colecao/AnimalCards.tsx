import "./AnimalCard.css"
import doguito from "../../assets/doguito.svg"
import { useState } from "react";
import { IAnimal } from "../../Interfaces/IAnimal";
import TituloPadras from "../TituloPadras/TituloPadras";
import Alerts from "../Alerts/Alerts";
import { useRegisteredPets } from "../../hooks/useRegisteredPets";



function AnimalCards() {
    // referente ao alert de erro 
    const [activeError, setActiveError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [pets, setPets] = useState<IAnimal[]>([])

    useRegisteredPets({ setPets, setActiveError, setErrorMessage })

    return (
        <div className="colecaoWrapper">

            <TituloPadras texto="Pets Cadastrados" />

            <div className="AnimalCardWrapper">


                {pets.map(petsMapped =>
                    <div className="cardWrapper backCard" key={petsMapped.id}>
                        <div className="cardd">
                            <div className="cardImageWrapper">
                                <img className={petsMapped.imageSource ? "cardImage" : "cardImageDoguito"} src={petsMapped.imageSource ?? doguito} />
                            </div>
                            <div className="cardBody">
                                <h3 className="cardTitle" key={petsMapped.nome}>{petsMapped.nome}</h3>
                                <h4 className="cardSubtitle" key={petsMapped.sexo}>{petsMapped.sexo}</h4>
                                <p className="cardText" key={petsMapped.tipo.nome}>Tipo: {petsMapped.tipo.nome}</p>
                                <p className="cardText" key={petsMapped.raca.nome}>Raça: {petsMapped.raca.nome}</p>
                                <p className="cardText" key={petsMapped.porte}>Tamanho: {petsMapped.porte}</p>
                                <p className="cardText" key={petsMapped.idade}>Idade: {petsMapped.idade}{Number(petsMapped.idade) > 1 ? ' anos' : ' ano'}</p>
                                <p className="cardText" key={petsMapped.userName}>Melhor amigo: {petsMapped.userName}</p>

                            </div>
                        </div>
                    </div>
                )}

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

export default AnimalCards;