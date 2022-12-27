import { IAnimal } from "../../Interfaces/IAnimal";
import doguito from "../../assets/doguito.svg"
import "./Card.css"

function Card(props: IAnimal) {
    return (
        <div className="cardWrapper backCard" key={props.id}>
                        <div className="cardd">
                            <div className="cardImageWrapper">
                                <img className={props.imageSource ? "cardImage" : "cardImageDoguito"} src={props.imageSource ?? doguito} />
                            </div>
                            <div className="cardBody">
                                <h3 className="cardTitle" key={props.nome}>{props.nome}</h3>
                                <h4 className="cardSubtitle" key={props.sexo}>{props.sexo}</h4>
                                <p className="cardText" key={props.tipo.nome}>Tipo: {props.tipo.nome}</p>
                                <p className="cardText" key={props.raca.nome}>Raça: {props.raca.nome}</p>
                                <p className="cardText" key={props.porte}>Tamanho: {props.porte}</p>
                                <p className="cardText" key={props.idade}>Idade: {props.idade}{Number(props.idade) > 1 ? ' anos' : ' ano'}</p>
                                <p className="cardText" key={props.userName}>Melhor amigo: {props.userName}</p>

                            </div>
                        </div>
                    </div>
    );
}

export default Card;