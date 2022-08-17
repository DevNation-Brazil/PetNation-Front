import { Avatar } from "@mui/material";
import "./AnimalCard.css"
import sadCat from "../../assets/sad-cat.jpg"
import drinkingCat from "../../assets/cat-drinking.jpg"
import shiba from "../../assets/shiba.jpg"
import { useState, useEffect } from "react";
import axios from "axios";
import { IAnimal } from "../../Interfaces/IAnimal";



function AnimalCards() {
    const [nome, setNome] = useState<IAnimal>()
    const [especie, setEspecie] = useState<string | null>('')
    const [raca, setRaca] = useState<string | null>('')
    const [porte, setPorte] = useState<string | null>('')
    const [idade, setIdade] = useState<string>('')



    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/pet`)
            .then(resposta => setNome(resposta.data.nome))

        

    }, [])
console.log(nome)


    return (
        <div className="colecaoWrapper">
            <h2 className="titlePetCadastrados">Pets Cadastrados</h2>

            <div className="AnimalCardWrapper">

                <div className="cardWrapper backCard">
                    <div className="cardd">
                        <img className="cardImage" src={drinkingCat} />
                        <div className="cardBody">
                            <h2 className="cardTitle">Nome: Drinking Cat</h2>
                            <p className="cardText">Espécie: Gato</p>
                            <p className="cardText">Sexo: Fêmea</p>
                            <p className="cardText">Raça: Tabby</p>
                            <p className="cardText">Tamanho: Pequeno</p>
                            <p className="cardText">Idade: 12 anos</p>

                        </div>
                    </div>
                </div>


                <div className="cardWrapper backCard">
                    <div className="cardd">
                        <img className="cardImage" src={sadCat} />
                        <div className="cardBody">
                            <h3 className="cardTitle">Sad Cat</h3>
                            <h4 className="cardSubtitle">Macho</h4>
                            <p className="cardText">Espécie: Gato</p>
                            <p className="cardText">Raça: Tabby</p>
                            <p className="cardText">Tamanho: Pequeno</p>
                            <p className="cardText">Idade: 12 anos</p>

                        </div>
                    </div>
                </div>





                <div className="cardWrapper backCard">
                    <div className="cardd">
                        <img className="cardImage" src={shiba} />
                        <div className="cardBody">
                            <h3 className="cardTitle">Sad Doggo</h3>
                            <h4 className="cardSubtitle">Macho</h4>
                            <p className="cardText">Espécie: Cachorro</p>
                            <p className="cardText">Raça: Shiba Inu</p>
                            <p className="cardText">Tamanho: Médio</p>
                            <p className="cardText">Idade: 9 anos</p>

                        </div>
                    </div>
                </div>

                <div className="cardWrapper backCard">
                    <div className="cardd">
                        <Avatar src={shiba} sx={{ marginTop: 1, marginLeft: 1, width: 150, height: 150 }} aria-label="recipe">
                            R
                        </Avatar>
                        <div className="cardBody">
                            <h3 className="cardTitle">Sad Doggo</h3>
                            <h4 className="cardSubtitle">Macho</h4>
                            <p className="cardText">Espécie: Cachorro</p>
                            <p className="cardText">Raça: Shiba Inu</p>
                            <p className="cardText">Tamanho: Médio</p>
                            <p className="cardText">Idade: 9 anos</p>

                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default AnimalCards;