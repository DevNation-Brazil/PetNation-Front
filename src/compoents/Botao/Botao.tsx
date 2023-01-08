import "./Botao.css"

interface BotaoProps {
    text: string
    icon?: any
    width: string
    height: string

}

function Botao({ text, icon, width, height }: BotaoProps) {
    return (

        <button className="botao" style={{width: `${width}`, height: `${height}`}} >
            {text}
            <div className="iconeDoBotao">
                {icon}
            </div>
        </button>

    );
}

export default Botao;