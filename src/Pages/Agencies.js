import Header from "../Components/Header";
import { Carousel, Container } from "react-bootstrap";
import agency1 from "../Components/images/agency1.jpg";
import agency2 from "../Components/images/agency2.jpg";
import agency3 from "../Components/images/agency3.jpg";

const Agencies = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="homepage">
          <header>
            <h1 className="homie">Welcome to the Synergies</h1>
          </header>
          --------
          <div className="carousel">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={agency1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={agency3}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={agency2}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <h5>
              Discover endless possibilities here. Whether you're seeking
              inspiration, knowledge, or connection, we've got you covered. Dive
              into our curated content, engage with our vibrant community, and
              embark on a journey of exploration.
            </h5>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Agencies;
