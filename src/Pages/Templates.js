import Header from "../Components/Header";
import { Col, Container, Row, Image, Button, Card } from "react-bootstrap";
import image1 from "../Components/images/image1.jpg";
import webtemp1 from "../Components/images/webtemp1.jpg";
import videotemp2 from "../Components/images/videotemp2.jpg";
import timetrack1 from "../Components/images/timetrack1.png";
import payment from "../Components/images/payment.png";
const Templates = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="px-4 py-5">
          <Col sm="7">
            <Image src={timetrack1} fluid rounded className="" />
          </Col>
          <Col sm="5">
            <h2 class="font-weight-light">ChoreManager</h2>
            <p class="mt-4">
              This is some templates of this businessservices done online by
              expert people to save your time and manage your work via your
              internet.
            </p>
            <Button variant="outline-primary">Call to Action</Button>
          </Col>
        </Row>
        <Row className="px-4 py-5">
          <Col sm="5">
            <h2 class="font-weight-light">ChoreManager</h2>
            <p class="mt-4">
              This is some templates of this businessservices done online by
              expert people to save your time and manage your work via your
              internet.
            </p>
            <Button variant="outline-primary">Call to Action</Button>
          </Col>
          <Col sm="7">
            <Image src={payment} fluid rounded className="" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="px-4 py-4">
          <Col sm="4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={videotemp2} />
              <Card.Body>
                <Card.Title>Free Video Templates</Card.Title>
                <Card.Text>
                  We want to take a moment to update you on some important
                  developments from our Client Management team. As part of our
                  ongoing commitment to enhancing our services, We have...
                </Card.Text>
                <Button variant="outline-primary ">Get Templates</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={webtemp1} />
              <Card.Body>
                <Card.Title>Free Website Templates</Card.Title>
                <Card.Text>
                  We want to take a moment to update you on some important
                  developments from our Project Management team. As part of our
                  ongoing commitment to enhancing our services, We have...
                </Card.Text>
                <Button variant="outline-primary">Get Templates</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Free UX Design Templates</Card.Title>
                <Card.Text>
                  We want to take a moment to update you on some important
                  developments from our Financial Management team. As part of
                  our ongoing commitment to enhancing our services, We have...
                </Card.Text>
                <Button variant="outline-primary">Get Templates</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Templates;
