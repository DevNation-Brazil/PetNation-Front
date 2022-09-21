import CarouselComp from "../../compoents/Carousel/CarouselComp";
import Header from "../../compoents/Header/Header";
import CriarConta from "../../compoents/Login/CriarConta";
import NavMenu from "../../compoents/NavMenu/NavMenu";
import Newcomers from "../../compoents/Newcomers/Newcomers";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auto/AuthContext";
import "./Landing.css"


function Landing() {
    const auth = useContext(AuthContext);

    return (
        <div>
            <NavMenu />
            <Header />


            <div className="landingMainContentWrapper">
                <div className="landingMainContent">
                    <div className="carouselCard">
                        <CarouselComp />
                        <div className="textoCarouselCard">
                        {!auth.user ? <CriarConta /> : <Newcomers />}
                        </div>
                    </div>
                </div>

            </div>

                {/*<div className="landingContentSecundario">
                    {!auth.user ? <CriarConta /> : <Newcomers />}
                    <Newcomers />
                </div>*/}
        </div>
    );
}

export default Landing;