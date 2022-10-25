import "./AnimalCard.css"
import doguito from "../../assets/doguito.svg"
import { useState, useEffect } from "react";
import axios from "axios";
import { IAnimal } from "../../Interfaces/IAnimal";
import TituloPadras from "../TituloPadras/TituloPadras";



function AnimalCards() {

    const [pets, setPets] = useState<IAnimal[]>([])



    useEffect(() => {
        axios.get<IAnimal[]>(`http://localhost:8080/api/v1/pet`)
            .then(resposta => setPets(resposta.data))

    }, [])


    return (
        <div className="colecaoWrapper">
            
            <TituloPadras texto="Pets Cadastrados" />

            <div className="AnimalCardWrapper">


                {pets.map(petsMapped =>
                    <div className="cardWrapper backCard" key={petsMapped.id}>
                        <div className="cardd">
                            <div className="cardImageWrapper">
                            <img className="cardImage" src={petsMapped.imageSource ?? doguito} />
                            </div>
                            <div className="cardBody">
                                <h3 className="cardTitle" key={petsMapped.nome}>{petsMapped.nome}</h3>
                                <h4 className="cardSubtitle" key={petsMapped.sexo}>{petsMapped.sexo}</h4>
                                <p className="cardText" key={petsMapped.tipo.nome}>Tipo: {petsMapped.tipo.nome}</p>
                                <p className="cardText" key={petsMapped.raca.nome}>Raça: {petsMapped.raca.nome}</p>
                                <p className="cardText" key={petsMapped.porte}>Tamanho: {petsMapped.porte}</p>
                                <p className="cardText" key={petsMapped.idade}>Idade: {petsMapped.idade}</p>

                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default AnimalCards;