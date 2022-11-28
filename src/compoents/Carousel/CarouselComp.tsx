import './Carousel.css'
import lizardo from "../../assets/lizardo.jpg"
import dog from "../../assets/dog.jpg"
import cat from "../../assets/cat.jpg"
import birdo from "../../assets/birdo.jpeg"
import rato from "../../assets/rato.jpg"
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


function CarouselComp() {

    return (
        <div className='carouselWrapper'>
            <Carousel>
                <Carousel.Item>
                    <Link to='/colecao'>
                        <img
                            className="carouselImage"
                            src={dog}
                            alt="Cachorro"
                        />

                        <Carousel.Caption className='carouselCaption'>
                            <h3 className='carouselText'>Pet Nation</h3>
                            <p className='carouselText'>O repositório mais fofo da internet ^^.</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to='/cadastro'>
                        <img
                            className="carouselImage"
                            src={cat}
                            alt="Gato"
                        />

                        <Carousel.Caption className='carouselCaption'>
                            <h3 className='carouselText'>Cadastre seu pet</h3>
                            <p className='carouselText'>Seu pet e mostre para seus amigos...</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to='/contato'>
                        <img
                            className="carouselImage"
                            src={lizardo}
                            alt="Lagarto"
                        />

                        <Carousel.Caption className='carouselCaption'>
                            <h3 className='carouselText'>Sobre o projeto</h3>
                            <p className='carouselText'>
                                Conheça mais sobre o projeto.
                            </p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="carouselImage"
                        src={birdo}
                        alt="Gato"
                    />
                    <Carousel.Caption className='carouselCaption'>
                        <h3 className='carouselText'>First slide label</h3>
                        <p className='carouselText'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="carouselImage"
                        src={rato}
                        alt="Passaro"
                    />
                    <Carousel.Caption className='carouselCaption'>
                        <h3 className='carouselText'>First slide label</h3>
                        <p className='carouselText'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselComp;