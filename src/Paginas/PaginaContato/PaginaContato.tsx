import Contato from "../../compoents/Contato/Contato";
import Header from "../../compoents/Header/Header";
import NavMenu from "../../compoents/NavMenu/NavMenu";
import Newcomers from "../../compoents/Newcomers/Newcomers";


function PaginaContato() {
    return (
        <>
        <NavMenu />
        <Header />
        <Newcomers />
        <Contato />
        </>
    );
}

export default PaginaContato;