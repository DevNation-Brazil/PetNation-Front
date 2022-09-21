import './Carousel.css'
import lizardo from "../../assets/lizardo.jpg"
import dog from "../../assets/dog.jpg"
import cat from "../../assets/cat.jpg"
import birdo from "../../assets/birdo.jpeg"
import rato from "../../assets/rato.jpg"
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function CarouselComp() {

    return (
        <div className='carouselWrapper'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carouselImage"
                        src={dog}
                        alt="Cachorro"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="carouselImage"
                        src={cat}
                        alt="Rato"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="carouselImage"
                        src={lizardo}
                        alt="Lagarto"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="carouselImage"
                        src={birdo}
                        alt="Gato"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="carouselImage"
                        src={rato}
                        alt="Passaro"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselComp;