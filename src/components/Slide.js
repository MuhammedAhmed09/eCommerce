import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../Images/image1.jpg';
import Image2 from '../Images/pexels-cottonbro-5076514.jpg';
import Image3 from '../Images/pexels-moose-photos-170195-1038000.jpg';


function DarkVariantExample() {
    return (
        <div className='container-sild'>
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <img
            src={Image1}    
            className="d-block w-100 img-hieght"
            alt="A7A"
            />
            <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 img-hieght"
            src={Image2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 img-hieght"
            src={Image3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default DarkVariantExample;