import "./CadastroStyle.css"
import doguito from "../../assets/doguito.svg"
import catpc from "../../assets/catpc.jpg"

function CadastroStyle() {
    return (
        <div className="exemploWrapper">
            <div className="exemploText">
                Quando fizer o cadastro seu pet ficará registrado como no card de exemplo.
            </div>

            <div className="exemploWrapperCardsArea">

                <div className="exemploCardOne">
                    <div className="cardWrapperExemplo backCardExemplo" >
                        <div className="carddExemplo">
                            <div className="cardImageWrapperExemplo">
                                <img className="cardImageExemplo" src={catpc} alt="Imagem do pet" />
                            </div>
                            <div className="cardBodyExemplo">
                                <h3 className="cardTitleExemplo" >Caqui</h3>
                                <h4 className="cardSubtitleExemplo" >Fêmea</h4>
                                <p className="cardTextExemplo" >Tipo: Gato</p>
                                <p className="cardTextExemplo" >Raça: Maine Coon</p>
                                <p className="cardTextExemplo" >Tamanho: Pequeno</p>
                                <p className="cardTextExemplo" >Idade: 1 ano</p>
                                <p className="cardTextExemplo" >Melhor amigo: Urgot</p>

                            </div>
                        </div>
                    </div>
                    <div className="exemploTextCardOne">
                        Com o nome do seu usuário no campo melhor amigo!
                    </div>
                </div>


                <div className="exemploText">
                    Caso não selecione uma foto, o cadastro ficará com uma imagem genérica.
                </div>
                <div className="exemploCardTwo">

                    <div className="exemploTextCardTwo">
                        Você pode trocar a foto qualquer hora bem como excluir o cadastro do seu pet.
                    </div>

                    <div className="cardWrapperExemplo backCardExemplo" >
                        <div className="carddExemplo">
                            <div className="cardImageWrapperExemplo">
                                <img className="cardImageDoguitoExemplo" src={doguito} alt="Imagem do pet" />
                            </div>
                            <div className="cardBodyExemplo">
                                <h3 className="cardTitleExemplo" >Ginga</h3>
                                <h4 className="cardSubtitleExemplo" >Macho</h4>
                                <p className="cardTextExemplo" >Tipo: Cachorro</p>
                                <p className="cardTextExemplo" >Raça: Vira Lata</p>
                                <p className="cardTextExemplo" >Tamanho: Grande</p>
                                <p className="cardTextExemplo" >Idade: 4 anos</p>
                                <p className="cardTextExemplo" >Melhor amigo: Jorge</p>

                            </div>
                        </div>
                    </div>

                    <div className="exemploTextCardTwoCelphone">
                        Você pode trocar a foto qualquer hora bem como excluir o cadastro do seu pet.
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CadastroStyle;