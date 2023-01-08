import "./CadastroStyle.css"
import catpc from "../../assets/catpc.jpg"
import Card from "../Colecao/Card";

function CadastroStyle() {

    return (
        <div className="exemploWrapper">
            <div className="exemploText">
                Quando fizer o cadastro seu pet ficará registrado como no card de exemplo.
            </div>

            <div className="exemploWrapperCardsArea">

                <div className="exemploCardOne">
                    <Card
                        imageSource={catpc}
                        nome='Caqui'
                        sexo="Fêmea"
                        tipo={{ nome: 'Caqui' }}
                        raca={{ nome: 'Maine Coon', tipo: { nome: "Gato" } }}
                        porte='Pequeno'
                        idade="3"
                        userName="Urgot"
                    />

                    <div className="exemploTextCardOne">
                        Com o nome do seu usuário no campo melhor amigo!
                    </div>
                </div>


                <div className="exemploTextTwo">
                    Caso não selecione uma foto, o cadastro ficará com uma imagem genérica.
                </div>
                <div className="exemploCardTwo">

                    <div className="exemploTextCardTwo">
                        Você pode trocar a foto qualquer hora bem como excluir o cadastro do seu pet.
                    </div>

                    <Card
                        nome='Ginga'
                        sexo="Macho"
                        tipo={{ nome: 'Cachorro' }}
                        raca={{ nome: 'Vira Lata', tipo: { nome: "Cachorro" } }}
                        porte='Grande'
                        idade="7"
                        userName="Jorge"
                    />

                    <div className="exemploTextCardTwoCelphone">
                        Você pode trocar a foto qualquer hora bem como excluir o cadastro do seu pet.
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CadastroStyle;