import doguito from "../../assets/doguito.svg"
import "./Card.css"
import { IRaca } from "../../Interfaces/raca";
import { ITipo } from "../../Interfaces/tipo";
import { Link } from "react-router-dom";


interface CardProps {
    id?: string
    imageSource?: string
    nome: string
    sexo: string
    porte: string
    raca: IRaca
    tipo: ITipo
    idade: string
    userId?: string
    userName?: string
    inconEdit?: any
    inconTrash?: any
}

function Card({ id, imageSource, nome, sexo, porte, raca, tipo, userId, idade, userName, inconEdit, inconTrash }: CardProps) {
    return (
        <div className="cardWrapper backCard" key={id}>
            <div className="cardd">
                <div className="cardImageWrapper">
                    <img className={imageSource ? "cardImage" : "cardImageDoguito"} src={imageSource ?? doguito} alt={`Imagem do pet ${nome}`} />
                </div>
                <div className="cardBody">
                    <h3 className="cardTitle" >{nome}</h3>
                    <h4 className="cardSubtitle" >{sexo}</h4>
                    <p className="cardText" >Tipo: {tipo.nome}</p>
                    <p className="cardText" >Raça: {raca.nome}</p>
                    <p className="cardText" >Tamanho: {porte}</p>
                    <p className="cardText" >Idade: {idade}{Number(idade) > 1 ? ' anos' : ' ano'}</p>
                    <p className="cardText" >Melhor amigo: {userName}</p>

                    <div className="userIconsWrapper">
                        <Link to={`/cadastro/${id}`}>
                            <span className="iconEditAnimalCardUser" >
                                {inconEdit}
                            </span>
                        </Link>

                        <span className="iconTrashAnimalCardUser">
                            {inconTrash}
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card;