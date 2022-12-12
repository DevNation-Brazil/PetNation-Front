import Cadastro from "../../compoents/Cadastro/Cadastro";
import CadastroStyle from "../../compoents/CadastroStyle/CadastroStyle";
import Header from "../../compoents/Header/Header";
import NavMenu from "../../compoents/NavMenu/NavMenu";
import "./PaginaCadastro.css"

function PaginaCadastro() {
    return (
        <>
            <NavMenu />
            <Header />
            <div className="paginaCadastroWrapper">
                <div className="mainContainerPaginaCadastro">
                    <Cadastro />
                    <CadastroStyle />
                </div>
            </div>
        </>
    );
}

export default PaginaCadastro;