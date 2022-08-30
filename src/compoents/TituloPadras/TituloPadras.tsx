import "./TituloPadras.css"


interface Props {
    texto: string;
  }

function TituloPadras({texto}: Props) {
    return (
        <div>
            <h2 className="tituloPadras">{texto}</h2>
        </div>
    );
}

export default TituloPadras;