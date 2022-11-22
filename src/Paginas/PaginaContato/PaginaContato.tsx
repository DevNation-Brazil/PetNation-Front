import Contato from "../../compoents/Contato/Contato";
import Header from "../../compoents/Header/Header";
import NavMenu from "../../compoents/NavMenu/NavMenu";
import "./PaginaContato.css"


function PaginaContato() {
    return (
        <>
            <NavMenu />
            <Header />

            <div className="contatoText">
                <div className="cardContatoText">
                    <h3 className="titleContatoTexttao">What is Lorem Ipsum?</h3>
                    <p className="textoContatoText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <Contato />
        </>
    );
}

export default PaginaContato;